import { FcDocument, FcEmptyTrash } from 'react-icons/fc';
import ComplianceFlag from './ComplianceFlag';
import ComplianceFlagRemove from './ComplianceFlagRemove';
import CreateComplianceItem from './CreateComplianceItem';
import EditComplianceItem from './EditComplianceItem';

const ComplianceTableAction = ({
  setFlaggedMessage,
  flaggedMessage,
  empty,
  option,
  category,
}) => {
  return (
    <div className="flex h-[27px] w-full items-center justify-center gap-3 text-lg">
      <span className="table-action-anim">
        {empty ? (
          <CreateComplianceItem option={option} category={category} />
        ) : (
          <EditComplianceItem option={option} category={category} />
        )}
      </span>
      <span className="table-action-anim">
        {flaggedMessage ? (
          <ComplianceFlagRemove setFlaggedMessage={setFlaggedMessage} />
        ) : (
          <ComplianceFlag setFlaggedMessage={setFlaggedMessage} />
        )}
      </span>
      <span className="">
        <FcDocument />
      </span>

      <span className="table-action-anim">
        <FcEmptyTrash />
      </span>
    </div>
  );
};

export default ComplianceTableAction;
