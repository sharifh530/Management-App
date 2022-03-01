import React from "react";
import AddMemberForm from "./AddMember/AddMemberForm";

const AddSingleMember = () => {
  return (
    <div className="bg-gray-50 h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl mb-10">Add Member</h1>
      </div>
      <AddMemberForm />
    </div>
  );
};

export default AddSingleMember;
