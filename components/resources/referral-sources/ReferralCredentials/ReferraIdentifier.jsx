import DeletePopup from '../../../structure/DeletePopup';
import ReferralCreateIdentifier from './ReferralCreateIdentifier';
import ReferralEditIdentifier from './ReferralEditIdentifier';

const ReferralIdentifier = () => {
  return (
    <div className="p-7">
      <div className="flex items-center gap-4">
        <h2 className="verdana16 font-semibold">Identifiers</h2>
        <ReferralCreateIdentifier />
      </div>

      <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Identify Type</th>
            <th className="th-middle">Identify Value</th>
            <th className="th-middle">Start date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="verdana11 w-full even:bg-[#eee]">
            <td className="td-primary">National Provider Identifier</td>
            <td className="td-primary">1234567894</td>
            <td className="td-primary">01/10/26</td>
            <td className="td-primary"></td>
            <td className="td-primary w-28">
              <div className="flex items-center justify-center">
                <ReferralEditIdentifier />
                <DeletePopup toDelete="identifier" deleteIcon={true} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReferralIdentifier;
