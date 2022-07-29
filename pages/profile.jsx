import React from "react";
import Transactions from "../components/Dashboard/Transactions";
import AuthLayout from "../components/Layouts/AuthLayout";
import ProfileCard from "../components/Profile/Profile";

const Profile = () => {
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-black md:pt-4">
        <Transactions />
        <div className="space-y-[1.375rem] max-w-[35.8rem] mb-24">
          <ProfileCard />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;