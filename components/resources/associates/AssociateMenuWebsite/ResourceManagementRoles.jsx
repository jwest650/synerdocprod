import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { useRef } from 'react';
import { resourceManagement } from '../../../../assets/data';
const ResourceManagementRoles = ({ setCheckedResources }) => {
  const resRef = useRef();
  const fields = {
    dataSource: resourceManagement,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };

  const handleCheckedNodesRes = (e) => {
    // console.log('RES------->>>>', e);
    // console.log('ref--------->', resRef.current.properties.checkedNodes);
    setCheckedResources(resRef.current.properties.checkedNodes);
  };

  return (
    <div>
      {/* Render the TreeView with checkboxes */}
      <TreeViewComponent
        ref={resRef}
        cssClass="scale-90 custom"
        nodeChecked={(e) => handleCheckedNodesRes(e)}
        fields={fields}
        showCheckBox={true}
      />
    </div>
  );
};
export default ResourceManagementRoles;
