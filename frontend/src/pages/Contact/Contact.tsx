import React, { useState } from "react";
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

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Validation function to ensure all fields are filled
  const validateFields = () => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) errors.name = "Please fill out this field";
    if (!formData.email.trim()) errors.email = "Please fill out this field";
    if (!formData.subject.trim()) errors.subject = "Please fill out this field";
    if (!formData.message.trim()) errors.message = "Please fill out this field";
    return errors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const errors = validateFields();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b5822f7e-835b-44e1-b80e-2cd1980389e9",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFieldErrors({});
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = () =>
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <Card title="Contact Me">
      <div>
        {/* Send Message Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold light:text-gray-800 dark:text-white">
              Send me a <span className="text-[#3aa5fd]">message</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <div className="flex items-center bg-blue-50 rounded-xl p-4 transition-all duration-300 focus-within:bg-blue-100 focus-within:ring-2 focus-within:ring-[#3aa5fd]">
                  <UserIcon className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent flex-1 text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                  />
                </div>
                {fieldErrors.name && (
                  <p className="text-red-600 text-sm mt-1 ml-2">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="flex items-center bg-blue-50 rounded-xl p-4 transition-all duration-300 focus-within:bg-blue-100 focus-within:ring-2 focus-within:ring-[#3aa5fd]">
                  <EnvelopeIcon className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent flex-1 text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-red-600 text-sm mt-1 ml-2">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="relative">
                <div className="flex items-center bg-blue-50 rounded-xl p-4 transition-all duration-300 focus-within:bg-blue-100 focus-within:ring-2 focus-within:ring-[#3aa5fd]">
                  <PencilSquareIcon className="w-6 h-6 text-gray-600 mr-4 flex-shrink-0" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent flex-1 text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                  />
                </div>
                {fieldErrors.subject && (
                  <p className="text-red-600 text-sm mt-1 ml-2">
                    {fieldErrors.subject}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column - Message */}
            <div className="relative">
              <div className="bg-blue-50 rounded-xl p-4 h-full transition-all duration-300 focus-within:bg-blue-100 focus-within:ring-2 focus-within:ring-[#3aa5fd]">
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-transparent w-full h-full text-gray-800 placeholder-gray-500 focus:outline-none text-lg resize-none"
                />
              </div>
              {fieldErrors.message && (
                <p className="text-red-600 text-sm mt-1 ml-2">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2 flex flex-col items-center mt-8">
              {status === "success" && (
                <div className="mb-4 p-4 bg-blue-100 border border-[#3aa5fd] text-[#3aa5fd] rounded-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                onClick={handleSubmit}
                className={`${
                  isLoading || !isFormValid()
                    ? "bg-blue-300 hover:bg-blue-900"
                    : "bg-[#3aa5fd] hover:bg-[#3aa5fd]/90 hover:scale-105"
                } text-white font-semibold px-8 py-4 rounded-md flex items-center gap-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    SENDING...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Alternatives Section */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold light:text-gray-800 dark:text-white">
              Or if you <span className="text-[#3aa5fd]">prefer</span>...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Phone */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Phone</h3>
                <p className="text-gray-600 text-lg">+91 9562498325</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <AiFillMail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">E-mail</h3>
                <p className="text-gray-600 text-lg">
                  samrudhkishsanpm@gmail.com
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <AiFillLinkedin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Linkedin</h3>
                <p className="text-gray-600 text-lg">
                  https://www.linkedin.com/in/samrudh-k-ish-san-pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <AiFillGithub className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Github</h3>
                <p className="text-gray-600 text-lg">
                  https://github.com/k-ish-san
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <AiFillFacebook className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Facebook</h3>
                <p className="text-gray-600 text-lg">
                  https://www.facebook.com/samrudhkishsan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-blue-50 rounded-2xl p-2 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg">
              <div className="bg-white rounded-xl p-3 text-gray-700">
                <AiFillInstagram className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Instagram</h3>
                <p className="text-gray-600 text-lg">
                  https://www.instagram.com/k_ish_san
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
