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

  const handleCheckedNodesPat = (e) => {
    // console.log('RES------->>>>', e);
    // console.log('ref--------->', resRef.current.checkedElement);
    setCheckedPatients(patRef.current.properties.checkedNodes);
  };

  return (
    <div>
      {/* Render the TreeView with checkboxes */}
      <TreeViewComponent
        ref={patRef}
        cssClass="scale-90 custom"
        nodeChecked={(e) => handleCheckedNodesPat(e)}
        fields={fields}
        showCheckBox={true}
      />
    </div>
  );
};
export default PatientManagementRoles;
