import React from "react";
import EditMemberForm from "./AddMember/EditMemberForm";

const EditSingleMember = () => {
  return (
    <div className="bg-gray-50 h-screen pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl mb-10">Edit Member</h1>
      </div>
      <EditMemberForm />
    </div>
  );
};

export default EditSingleMember;
