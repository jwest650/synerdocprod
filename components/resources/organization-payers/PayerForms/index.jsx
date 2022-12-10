import { FcPrint } from 'react-icons/fc';
import DeletePopup from '../../../structure/DeletePopup';
import { payerFormData } from '../payerDatatwo';
import PayerCreateForm from './PayerCreateForm';

const PayerForms = () => {
  return (
    <div className="mt-7 mb-10 px-5">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">Forms</h2>
        <PayerCreateForm edit={false} />
      </div>

      <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Type</th>
            <th className="th-middle">Created</th>
            <th className="th-middle">Performed By</th>
            <th className="th-middle">Revised By</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payerFormData.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary"> {option.type} </td>
              <td className="td-primary">{option.created}</td>
              <td className="td-primary">{option.performedBy}</td>
              <td className="td-primary">{option.revisedBy}</td>
              <td className="td-primary">{option.status}</td>
              <td className="td-primary">
                <div className="flex items-center justify-evenly">
                  <PayerCreateForm edit={true} />
                  <FcPrint className="scale-150" />
                  <DeletePopup toDelete="document" deleteIcon={true} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayerForms;
