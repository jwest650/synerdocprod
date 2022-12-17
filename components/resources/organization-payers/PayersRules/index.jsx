import Image from 'next/image';
import SearchIcon from '../../../../assets/images/search.png';
import { payerRules } from '../payerDatatwo';
import PayerCreateRule from './PayerCreateRule';
import PayerEditRule from './PayerEditRule';
import PayerRuleMod from './PayerRuleMod';

const PayersRules = () => {
  return (
    <div className="p-7">
      <h2 className="verdana16 font-semibold">Payer Rules</h2>
      <table className="mt-3 w-full">
        <thead className="thead-primary">
          <tr>
            <th className="th-first">Rule Name</th>
            <th className="th-middle">Rule Description</th>
            <th className="th-middle">Group Code</th>
            <th className="th-middle">Is Active</th>
            <th className="th-middle">Is Visible</th>
            <th className="th-middle">Start Date</th>
            <th className="th-middle">End Date</th>
            <th className="th-last">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payerRules.map((option, index) => (
            <tr key={index} className="even:bg-[#eee]">
              <td className="td-primary">{option.name}</td>
              <td className="td-primary">{option.description}</td>
              <td className="td-primary">{option.groupCode}</td>
              <td className="td-primary">{option.groupCode}</td>
              <td className="td-primary">{option.groupCode}</td>
              <td className="td-primary">{option.startDate}</td>
              <td className="td-primary">{option.endDate}</td>
              <td className="td-primary">
                <div className="flex justify-between gap-1 px-2">
                  <PayerEditRule option={option} />
                  <PayerCreateRule option={option} />
                  <PayerRuleMod />
                  <Image src={SearchIcon} alt="icon" width={16} height={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayersRules;
