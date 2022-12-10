import DeletePopup from '../../../structure/DeletePopup';
import ReferralCreateLicense from './ReferralCreateLicense';
import ReferralEditLicense from './ReferralEditLicense';

const ReferralLicense = () => {
  return (
    <div className="p-7">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">Licenses</h2>
        <ReferralCreateLicense />
      </div>

      <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">License Number</th>
            <th className="th-middle">State</th>
            <th className="th-middle">Expires</th>
            <th className="th-middle">Verified</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">12346778</td>
            <td className="td-primary">LA</td>
            <td className="td-primary">01/10/26</td>
            <td className="td-primary">09/02/19</td>
            <td className="td-primary text-green-600">Active</td>
            <td className="td-primary w-28">
              <div className="flex items-center justify-center">
                <ReferralEditLicense />
                <DeletePopup toDelete="license" deleteIcon={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReferralLicense;
