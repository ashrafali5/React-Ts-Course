import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://placeholder.pics/svg/1500x400",
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://placeholder.pics/svg/100x100",
  );

  const handleChangeBanner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative ml-20 w-[calc(100% - 5rem)]  ">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="banner-image"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-4  rounded-full hover:bg-gray-600 ">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            accept="image/*"
            id="banner-upload"
            className="hidden"
            onChange={handleChangeBanner}
          />
        </button>
      </div>
      {/* Logo */}
      <div className="flex items-center ml-4 mt-8">
        <img
          src={profileUrl}
          alt="profile logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />

        <button className="absolute ml-13 mt-30 z-10 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleChangeProfile}
          />
        </button>
        {/* Profile Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">CloveX programmer</h1>
          <p className="font-bold">1M views</p>
          <p className="w-120">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            itaque obcaecati facere, voluptatum assumenda eius nihil repudiandae
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-2xl hover:bg-blue-400">
            Follow
          </button>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
    </div>
  );
};

export default Profile;
