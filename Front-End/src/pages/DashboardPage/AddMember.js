import React from "react";
import AddSingleMember from "../../components/DashboardComps/AddSingleMember";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";

const AddMember = () => {
  return (
    <div>
      <DashboardLayout>
        <AddSingleMember />
      </DashboardLayout>
    </div>
  );
};

export default AddMember;
