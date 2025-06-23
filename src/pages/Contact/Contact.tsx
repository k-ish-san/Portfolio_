import React, { useState, useCallback } from "react";
import { Card } from "../../components/Card";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";

const socialLinks = [
  {
    icon: AiFillLinkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/samrudh-k-ish-san-pm",
  },
  {
    icon: AiFillGithub,
    label: "GitHub",
    value: "https://github.com/k-ish-san",
  },
  {
    icon: AiFillFacebook,
    label: "Facebook",
    value: "https://www.facebook.com/samrudhkishsan",
  },
  {
    icon: AiFillInstagram,
    label: "Instagram",
    value: "https://www.instagram.com/k_ish_san",
  },
];

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface FieldErrors extends Partial<ContactData> {}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
      if (status === "error") setStatus("idle");
    },
    [status]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b5822f7e-835b-44e1-b80e-2cd1980389e9",
          ...formData,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("Submission failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const isValid = Object.values(formData).every((field) => field.trim() !== "");

  return (
    <Card title="Contact Me">
      <form onSubmit={handleSubmit} noValidate>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-6">
          {["name", "email", "subject"].map((field, idx) => {
            const Icon = [UserIcon, EnvelopeIcon, PencilSquareIcon][idx];
            const placeholder = `${field[0].toUpperCase()}${field.slice(1)} *`;

            return (
              <div key={field} className="relative">
                <label htmlFor={field} className="sr-only">
                  {placeholder}
                </label>
                <div className="flex items-center bg-blue-50 rounded-xl p-4 focus-within:ring-2 focus-within:ring-[#3aa5fd]">
                  <Icon className="w-6 h-6 text-gray-600 mr-4" />
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={placeholder}
                    value={formData[field as keyof ContactData]}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent flex-1 text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                  />
                </div>
                {fieldErrors[field as keyof FieldErrors] && (
                  <p className="text-sm text-red-600 mt-1 ml-2">
                    {fieldErrors[field as keyof FieldErrors]}
                  </p>
                )}
              </div>
            );
          })}

          <div className="lg:col-span-2">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <div className="bg-blue-50 rounded-xl p-4 h-full focus-within:ring-2 focus-within:ring-[#3aa5fd]">
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none text-lg resize-none"
              />
            </div>
            {fieldErrors.message && (
              <p className="text-sm text-red-600 mt-1 ml-2">
                {fieldErrors.message}
              </p>
            )}
          </div>
        </section>

        {status === "success" && (
          <div
            role="status"
            className="mb-4 p-4 bg-blue-100 text-[#3aa5fd] border border-[#3aa5fd] rounded-lg"
          >
            ✅ Message sent successfully!
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading || !isValid}
            className={`flex items-center gap-3 px-8 py-4 rounded-md text-lg font-semibold text-white shadow-lg transition-all duration-300 ${
              isLoading || !isValid
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-[#3aa5fd] hover:bg-[#3aa5fd]/90 hover:scale-105"
            }`}
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>

      <hr className="my-10 border-t" />

      {/* Alternative Contact Options */}
      <section className="mx-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Or connect via
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone & Email */}
          <div className="bg-blue-50 rounded-2xl flex items-center space-x-4 p-4">
            <PhoneIcon className="w-8 h-8 text-gray-700 bg-white p-2 rounded-xl" />
            <div>
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-sm text-gray-600">+91 9562498325</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl flex items-center space-x-4 p-4">
            <AiFillMail className="w-8 h-8 text-gray-700 bg-white p-2 rounded-xl" />
            <div>
              <h3 className="text-lg font-bold">E-mail</h3>
              <p className="text-sm text-gray-600">
                samrudhkishsanpm@gmail.com
              </p>
            </div>
          </div>

          {/* Socials */}
          {socialLinks.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-blue-50 rounded-2xl flex items-center space-x-4 p-4"
            >
              <Icon className="w-8 h-8 text-gray-700 bg-white p-2 rounded-xl" />
              <div>
                <h3 className="text-lg font-bold">{label}</h3>
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 break-all underline hover:text-[#3aa5fd]"
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
};

export default Contact;
