import React from 'react';
import DashboardComps from '../../components/DashboardComps/DashboardComps';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const DashboardPage = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardComps />
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
