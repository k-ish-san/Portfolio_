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
      loading="lazy"
      className="w-30 h-35 rounded-3xl object-cover bg-gray-200"
    />
    <div>
      <div className="text-lg text-white mt-2 font-semibold" aria-label="Name">
        {name}
      </div>
      {title && (
        <div
          className="text-sm text-center text-[#3aa5fd]"
          aria-label="Professional Title"
        >
          {title}
        </div>
      )}
    </div>
  </div>
);

export default ProfileIntro;
