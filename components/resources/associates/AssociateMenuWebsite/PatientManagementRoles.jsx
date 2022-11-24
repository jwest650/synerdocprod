import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { useRef } from 'react';
import { patientManagement } from '../../../../assets/data';

const PatientManagementRoles = ({ setCheckedPatients }) => {
  const patRef = useRef();

  const fields = {
    dataSource: patientManagement,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };

  const handleCheckedNodesPat = () => {
    setCheckedPatients(patRef.current.properties.checkedNodes);
  };

  return (
    <div>
      <TreeViewComponent
        ref={patRef}
        cssClass="scale-90 custom"
        nodeChecked={handleCheckedNodesPat}
        fields={fields}
        showCheckBox={true}
      />
    </div>
  );
};
export default PatientManagementRoles;
