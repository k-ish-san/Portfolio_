// src/components/ProfileIntro.tsx
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
  <div className="flex flex-col items-center">
    <img
      src={avatarUrl}
      alt={name}
      className="w-30 h-35 rounded-3xl object-cover bg-gray-200"
    />
    <div>
      <div className="text-lg text-white mt-2">{name}</div>
      <div className="text-sm text-center text-[#3aa5fd]">{title}</div>
    </div>
  </div>
);

export default ProfileIntro;
