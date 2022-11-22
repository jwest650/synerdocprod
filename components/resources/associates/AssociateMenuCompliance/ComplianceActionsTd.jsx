import { useState } from 'react';
import { FcCancel, FcOk } from 'react-icons/fc';
import ComplianceTableAction from './ComplianceTableAction';

const ComplianceActionsTd = ({ option, category }) => {
  const [flaggedMessage, setFlaggedMessage] = useState('');

  return (
    <>
      <td className="td-primary">{option.item} </td>
      <td className="td-primary">{option.lastModifiedBy} </td>
      <td className="td-primary">{option.lastModifiedByDate}</td>
      <td className="td-primary">
        {flaggedMessage ? flaggedMessage : option.comment}
      </td>
      <td className="td-primary text-xl">
        <div className="flex items-center justify-center">
          {option.complaint ? <FcOk /> : <FcCancel />}
        </div>
      </td>
      <td className="td-primary">{option.completed}</td>
      <td className="td-primary">{option.renewal}</td>
      <td className="td-primary w-40">
        <ComplianceTableAction
          setFlaggedMessage={setFlaggedMessage}
          flaggedMessage={flaggedMessage}
          category={category}
          option={option}
          empty={
            option.lastModifiedBy === ''
              ? option.lastModifiedByDate === '' &&
                option.comment === '' &&
                option.completed === '' &&
                option.renewal === '' &&
                true
              : false
          }
        />
      </td>
    </>
  );
};

export default ComplianceActionsTd;
