import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { useRef } from 'react';

const GeneralTreeview = ({ treeviewData, setCheckedNodes }) => {
  const patRef = useRef();

  const fields = {
    dataSource: treeviewData,
    id: 'id',
    parentID: 'pid',
    text: 'name',
    hasChildren: 'hasChild',
  };

  const handleCheckedNodes = () => {
    setCheckedNodes !== undefined &&
      setCheckedNodes(patRef.current.properties.checkedNodes);
  };

  return (
    <div className="w-full">
      <TreeViewComponent
        ref={patRef}
        cssClass="scale-90 custom"
        nodeChecked={handleCheckedNodes}
        fields={fields}
        showCheckBox={true}
      />
    </div>
  );
};
export default GeneralTreeview;
