import Image from 'next/image';
import InputDropdown from '../../components/home/staff/InputDropdown';
import CalendarComp from '../../components/structure/CalendarComp';
import SearchIcon from '../../assets/images/search.png';
import { useState } from 'react';

const PayonlyDetail = () => {
  const [serviceDate, setServiceDate] = useState('');
  return (
    <section className="container-primary space-y-6">
      <h2 className="verdana16 border-b border-primary-gray font-semibold">
        Create and Schedule a Pay Only Service
      </h2>
      <div className="mx-auto mt-4 max-w-2xl">
        <h3 className="verdana14 border-b  border-dotted border-primary-gray text-center font-semibold">
          Pay Only Service
        </h3>

        <div className="mt-6 flex w-full flex-col items-center gap-3.5">
          <div className="flex w-full items-center justify-center gap-3 ">
            <label className="flex w-[35%]  justify-end">
              <span className="text-primary-orange">*</span>
              Agency:
            </label>
            <div className=" flex w-[65%] items-center gap-1">
              <InputDropdown
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
              <InputDropdown options={['']} placeholder="[Select a Patient]" />

              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={SearchIcon}
                  alt="searchicon"
                  width="13px"
                  height="13px"
                />{' '}
                <span className="text-primary-orange underline">
                  Find Patient
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              <span className="text-primary-orange">*</span>
              Associate:
            </label>

            <div className=" flex w-[65%] items-center gap-10">
              <InputDropdown
                options={['']}
                placeholder="[Select an Associate]"
              />
              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={SearchIcon}
                  alt="searchicon"
                  width="13px"
                  height="13px"
                />{' '}
                <span className="text-primary-orange underline">
                  Find Associate
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              <span className="text-primary-orange">*</span>
              Service:
            </label>
            <div className=" flex w-[65%] items-center gap-24">
              <InputDropdown options={['']} placeholder="[Select a Service]" />
              <p className="flex items-center gap-2">
                <span>
                  <span className="text-primary-orange">*</span>
                  Date:
                </span>
                <CalendarComp setDate={setServiceDate} />
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <label htmlFor="" className="flex w-[35%] justify-end">
              Service Time:
            </label>
            <div className=" flex w-[65%] items-center gap-10">
              <input type="text" className="input-primary w-24" />
              <p className="flex items-center gap-2">
                to: <input type="text" className="input-primary w-20" />
              </p>
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
          <button className="btn-primary">Schedule/Continue</button>
          <button className="btn-primary">Schedule/Create More</button>
          <button className="btn-cancel">Cancel</button>
        </div>
      </div>
    </section>
  );
};

export default PayonlyDetail;
