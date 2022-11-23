import { useRouter } from 'next/router';

const UserRolesSection = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];
  return (
    <section className="verdana11 mx-8 flex w-full flex-col items-center justify-center gap-3 rounded-sm border border-primary-gray bg-texiary-blue p-6 shadow-md">
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">Username:</label>
        <p className="input-primary w-[100%] ">{associateUrl}@gmail.com</p>
      </div>
      <div className="flex w-full justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Is Active:
        </label>
        <div className="w-full">
          <input type="checkbox" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Is Locked Out:
        </label>
        <div className="w-full">
          <input type="checkbox" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Start Date:
        </label>
        <p className="input-primary w-[100%] ">7/22/2022</p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">End Date:</label>
        <p className="input-primary w-[100%] ">1/1/2042</p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Last Login:
        </label>
        <p className="w-[100%]"></p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Previous Login:
        </label>
        <p className="w-[100%] "></p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">
          Password Expires:
        </label>
        <p className="input-primary w-[100%] ">7/7/2022</p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">Created: </label>
        <p className="input-primary w-[100%] ">7/7/2022</p>
      </div>
      <div className="flex w-full items-center justify-center">
        <label className="mr-3 w-[50%] text-end font-semibold">Updated: </label>
        <p className="input-primary w-[100%] ">7/7/2022</p>
      </div>
    </section>
  );
};

export default UserRolesSection;
