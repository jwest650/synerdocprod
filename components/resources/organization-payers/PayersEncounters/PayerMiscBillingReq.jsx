const PayerMiscBillingReq = () => {
  return (
    <div>
      <h3 className="verdana14 font-semibold">Authorization Requirements</h3>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-3.5">
        <div className="flex w-full items-center gap-3 ">
          <p className="flex w-[35%] justify-end  font-semibold">
            Miscellaneous Billing Allowed:
          </p>
          <div className=" flex w-[65%] gap-2">
            <input type="checkbox" className="input-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerMiscBillingReq;
