const Calendarnav = () => {
  return (
    <div className="mb-10 mt-8 w-full space-y-5 overflow-x-auto rounded bg-secondary-light-bg py-5 px-2 shadow dark:border-t dark:border-gray-800/50 dark:bg-main-dark-bg dark:shadow-2xl">
      <div className="flex flex-wrap items-center gap-5 text-sm text-secondary-text-light dark:text-secondary-text-dark">
        <div className="flex items-center gap-2 text-sm">
          <p className="text-base">Preferred Phone Number:</p>
          <span className="font-semibold">(318)-332-9842</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">assigned</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">unassigned</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">verified</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">show service times</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">show service description</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <label className="">omit pay onlys</label>
        </div>
        <span className=" text-[12px] text-cyan-400">Therapy Utilization</span>
      </div>
      <div className="mt-5 space-x-5 text-xs font-semibold text-cyan-400 md:mt-0">
        <span className="cursor-pointer">Non-Patient Time Entry</span>
        <span className="cursor-pointer">Clock In</span>
        <span className="cursor-pointer">Clock Out</span>
      </div>
    </div>
  );
};

export default Calendarnav;
