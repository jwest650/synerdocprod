import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { useRef } from 'react';
import { resourceManagement } from '../../resourcesData';

const ResourceManagementRoles = ({ setCheckedResources }) => {
  const resRef = useRef();
  const fields = {
    dataSource: resourceManagement,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };

  const handleCheckedNodesRes = () => {
    setCheckedResources(resRef.current.properties.checkedNodes);
  };

  return (
    <div>
      <TreeViewComponent
        ref={resRef}
        cssClass="scale-90 custom"
        nodeChecked={handleCheckedNodesRes}
        fields={fields}
        showCheckBox={true}
      />
    </div>
  );
};
export default ResourceManagementRoles;
