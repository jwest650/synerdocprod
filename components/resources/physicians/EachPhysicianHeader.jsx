import EditPhysicians from './EditPhysician';

const EachPhysicianHeader = ({ physicianUrl }) => {
  return (
    <div className="flex w-full flex-col items-center rounded border px-5 pt-5 pb-12 text-sm shadow">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wide">
            {physicianUrl}
          </h2>
          <EditPhysicians />
        </div>
        <div className="space-x-5">
          <span className="text-base font-extrabold text-green-800">
            PHYSICIAN
          </span>
        </div>
      </div>
      <div className="verdana12 mt-5 flex w-full justify-between px-16">
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Title:</p>
            <p className=" flex w-[50%] ">Medical Doctor</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Speciality:
            </p>
            <p className=" flex w-[50%] ">Cardiologist</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Group:</p>
            <p className=" flex w-[50%] "></p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Email:</p>
            <p className=" flex w-[50%] ">{physicianUrl}@gmail.com</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Sales Rep:
            </p>
            <p className=" flex w-[50%] uppercase">Bailey Deborah</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">
              Start Date:
            </p>
            <p className=" flex w-[50%] ">1/1/2020</p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">End Date:</p>
            <p className=" flex w-[50%] "></p>
          </div>
          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[50%] justify-end  font-semibold">Updated:</p>
            <p className=" flex w-[50%] ">9/10/2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachPhysicianHeader;
