import Image from 'next/image';
import CalendarComp from '../../components/structure/CalendarComp';
import SearchIcon from '../../assets/images/search.png';
import { useState } from 'react';
import Link from 'next/link';
import InputDropdown from '../../components/home/otheractionscard/staff/InputDropdown';
import FindResource from '../../components/home/otheractionscard/staff/FindResource';

const PayonlyDetail = () => {
  const [serviceDate, setServiceDate] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [associateName, setAssociateName] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [resourceName, setResourceName] = useState(false);

  return (
    <section className="container-primary space-y-6">
      <h2 className="verdana16 border-b border-primary-gray font-semibold">
        Create and Schedule a Pay Only Service
      </h2>
      <div className="mx-auto mt-4 max-w-2xl">
        <h3 className="verdana14 border-b  border-dotted border-primary-gray text-center font-semibold">
          Pay Only Service
        </h3>
        <div className="mt-6 flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-3 ">
            <label className="flex w-[35%]  justify-end">
              <span className="text-primary-orange">*</span>
              Agency:
            </label>
            <div className=" flex w-[65%] items-center gap-1">
              <InputDropdown
                setSelectedOption={setAgencyName}
                selectedOption={agencyName}
                placeholder="Sinam care, LLC"
                options={['Sinam Care, LLC']}
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              Patient:
            </label>
            <div className=" flex w-[65%] items-center gap-10">
              <InputDropdown
                from="Patient"
                setSelectedOption={setPatientName}
                selectedOption={patientName}
                options={['Atkinson Dorothy']}
                placeholder="[Select a Patient]"
              />

              <FindResource
                resourceType="Patient"
                resourceName={resourceName}
                setResourceName={setResourceName}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              <span className="text-primary-orange">*</span>
              Associate:
            </label>

            <div className=" flex w-[65%] items-center gap-10">
              <InputDropdown
                options={['Adjei Felix']}
                selectedOption={associateName}
                setSelectedOption={setAssociateName}
                placeholder="[Select an Associate]"
              />
              <div className="flex cursor-pointer items-center gap-2">
                <FindResource
                  resourceType="Associate"
                  resourceName={resourceName}
                  setResourceName={setResourceName}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              <span className="text-primary-orange">*</span>
              Service:
            </label>
            <div className=" flex w-[65%] items-center gap-24">
              <InputDropdown
                selectedOption={serviceName}
                setSelectedOption={setServiceName}
                options={['Service']}
                placeholder="[Select a Service]"
              />
              <div className="flex items-center gap-2">
                <span>
                  <span className="text-primary-orange">*</span>
                  Date:
                </span>
                <CalendarComp setDate={setServiceDate} />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              Service Time:
            </label>
            <div className=" flex w-[65%] items-center gap-10">
              <input type="text" className="input-primary w-24" />
              <div className="flex items-center gap-2">
                to: <input type="text" className="input-primary w-20" />
              </div>
              <p className="flex items-center gap-2">
                Duration: <input type="text" className="input-primary w-20" />
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              Comments:
            </label>
            <div className=" flex w-[65%] ">
              <textarea className="input-primary" />
            </div>
          </div>
        </div>
        <div className="mt-8  flex w-full items-center justify-center gap-10 rounded bg-amber-200 p-6 shadow">
          <Link href="/">
            <button className="btn-primary">Schedule/Continue</button>
          </Link>
          <Link href="/">
            <button className="btn-primary">Schedule/Create More</button>
          </Link>
          <Link href="/">
            <button className="btn-cancel">Cancel</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PayonlyDetail;
