import DeletePopup from '../../../structure/DeletePopup';
import PayerCreateCarrierCode from './PayerCreateCarrierCode';
import PayerEditCarrierCode from './PayerEditCarrierCode';

const PayerCarrierCode = () => {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">Payer Carrier Codes</h2>
        <PayerCreateCarrierCode />
      </div>

      <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Relational Payer Name</th>
            <th className="th-middle">Carrier Code</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">Aetna</td>
            <td className="td-primary">asd043</td>
            <td className="td-primary">01/10/09</td>
            <td className="td-primary"></td>
            <td className="td-primary w-28">
              <div className="flex items-center justify-center">
                <PayerEditCarrierCode />
                <DeletePopup toDelete="carrier code" deleteIcon={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PayerCarrierCode;
