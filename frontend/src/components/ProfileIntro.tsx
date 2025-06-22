import React from "react";

interface ProfileIntroProps {
  name: string;
  title?: React.ReactNode;
  avatarUrl: string;
}

const ProfileIntro: React.FC<ProfileIntroProps> = ({
  name,
  title,
  avatarUrl,
}) => (
  <div className="flex flex-col items-center" role="presentation">
    <img
      src={avatarUrl}
      alt={`Portrait of ${name}`}
      width={120}
      height={140}
      // 👇 Avoid lazy for LCP image
      fetchPriority="high"
      className="w-[120px] h-[140px] rounded-3xl object-cover bg-gray-200"
    />
    <div className="text-center mt-2">
      <h1 className="text-lg text-white font-semibold" aria-label="Name">
        {name}
      </h1>
      {title && (
        <h2
          className="text-sm text-[#3aa5fd] mt-1"
          aria-label="Professional Title"
        >
          {title}
        </h2>
      )}
    </div>
  </div>
);

export default ProfileIntro;
