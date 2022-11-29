import { payerCBRData } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';

const PayerCBR3 = ({ setShowModal, onClose, setFrom }) => {
  return (
    <>
      <h2 className="verdana14">
        Add Payer Rates for <strong>Modalities </strong>
        to Agency
        <strong> Louisiana Labor of Love </strong>
      </h2>
      <div className="mt-7 flex items-center justify-between gap-3">
        <p className="cursor-pointer text-primary-orange underline">
          Set all services to rate of 0
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <p>Allow Override: </p>
            <input type="checkbox" className="input-primary" />
          </div>
          <div className="flex items-center gap-3">
            <p>Start Date: </p>
            <input type="date" className="input-primary" />
          </div>
          <div className="flex items-center gap-3">
            <input type="date" className="input-primary" />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>
      <div className="my-6 flex items-center justify-end gap-5">
        <div className="flex items-center gap-3">
          <p>Description Start with:</p>
          <input type="text" placeholder="a" className="input-primary" />
        </div>
        <div className="flex items-center gap-3">
          <p>End with:</p>
          <input type="text" placeholder="az" className="input-primary" />
        </div>
      </div>
      <table className="mt-3 w-full">
        <thead className="thead-primary">
          <tr>
            <th className="th-first">Row</th>
            <th className="th-middle">Service</th>
            <th className="th-middle">Description</th>
            <th className="th-middle">Unit of Measure</th>
            <th className="th-middle">Payer Rate</th>
            <th className="th-middle">Allow Override</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">Revenue Code</th>
            <th className="th-last">HCPC Code</th>
          </tr>
        </thead>
        <tbody>
          {payerCBRData.map((option, index) => (
            <tr key={index} className="bg-[#eee]">
              <td className="td-primary">
                <p className="text-center">{index + 1}</p>
              </td>
              <td className="td-primary">{option.service}</td>
              <td className="td-primary">{option.description}</td>
              <td className="td-primary">{option.unitOfMeasure}</td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input type="text" className="input-primary w-16" />
                </div>
              </td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input type="checkbox" className="input-primary" />
                </div>
              </td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input type="date" className="input-primary w-28" />
                </div>
              </td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <TableSelect options={['551-Skilled Nurse', 'Option2']} />
                </div>
              </td>
              <td className="td-primary">
                <div className="flex justify-center">
                  <input
                    type="text"
                    className="input-primary w-16"
                    value={option.HCPCCode}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10 flex w-full items-center justify-between ">
        <div className="flex w-full gap-3">
          <button
            onClick={() => {
              setShowModal(1);
              setFrom('');
            }}
            className="btn-modalcancel"
          >
            Back
          </button>
          <button className="btn-modalcancel">Clear Grid</button>
        </div>
        <div className="flex w-full justify-end gap-3">
          <button
            onClick={() => {
              setShowModal(1);
              setFrom('');
            }}
            className="btn-secondary"
          >
            Save
          </button>
          <button
            onClick={() => {
              setShowModal(1);
              setFrom('');
              onClose();
            }}
            className="btn-modalcancel cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default PayerCBR3;
