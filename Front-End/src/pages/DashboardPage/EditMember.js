import React from "react";
import EditSingleMember from "../../components/DashboardComps/EditSingleMember";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";

const EditMember = () => {
  return (
    <div>
      <DashboardLayout>
        <EditSingleMember />
      </DashboardLayout>
    </div>
  );
};

export default EditMember;
