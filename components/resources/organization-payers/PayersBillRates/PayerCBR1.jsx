import TableSelect from '../../../structure/TableSelect';

const PayerCBR1 = ({ onClose, setShowModal, from, setFrom }) => {
  return (
    <>
      <h1 className="verdana14 mb-10 font-semibold">
        Select a Service Category and Agency
      </h1>
      <div className="verdana12 space-y-10">
        <div className="flex items-center justify-between">
          <TableSelect options={['Skilled Nurse', 'Option2']} />
          <TableSelect options={['Louisiana Labour of Love', 'Option2']} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <p>Show only services that do not have rates:</p>
            <input type="checkbox" className="input-primary" />
          </div>
          <div className="flex items-center gap-3.5">
            <p>Unit of Measure:</p>
            <TableSelect
              options={['Per Visit', 'Hourly', '15 Minute Increment']}
            />
          </div>
        </div>
      </div>
      <div className="mt-14 flex w-full justify-end gap-3">
        <button onClick={() => setShowModal(2)} className="btn-secondary">
          Next
        </button>
        <div
          onClick={() => {
            from === 'save'
              ? setShowModal(3)
              : () => {
                  setShowModal(1);
                  setFrom('');
                  onClose();
                };
          }}
          className="btn-modalcancel cursor-pointer"
        >
          Cancel
        </div>
      </div>
    </>
  );
};

export default PayerCBR1;
