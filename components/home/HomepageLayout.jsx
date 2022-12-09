import React from 'react';
import Calendarnav from './Calendarnav';
import Card from './Card';
import ContentOptions from './ContentOptions';
import Infoleft from './Infoleft';
import Welcome from './Welcome';

const HomepageLayout = ({ children }) => {
  return (
    <>
      <Welcome />
      <div className="w-full rounded-3xl px-3 pt-7">
        <Calendarnav />
        <ContentOptions />
        <div className="mt-[18px]  flex flex-col gap-3 lg:grid lg:grid-cols-4">
          <div className="mb-16 lg:col-span-3">
            {children}
            <div className="mt-3 grid  gap-3 md:grid-cols-2">
              <Card title="Schedule" addOption={null} />
              <Card title="Patients" addOption="Add Referral/Patient" />
              <Card title="Invoices" addOption={null} />
              <Card title="Associates" addOption="Add Associates" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Infoleft />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepageLayout;
