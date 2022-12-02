import { associateTableData } from '../associateData';

const NewModal = ({ setResourceType, resourceType, setResourceName }) => {
  return (
    <div className="">
      <div className="mt-3 flex justify-between">
        <h3 className="verdana16 font-semibold">All {resourceType}</h3>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="search" className="input-primary " />
          <div className="btn-primary">Search</div>
        </div>
      </div>
      <table className="mx-auto mt-5 w-full px-5">
        <thead className="thead-primary">
          <tr>
            <th className="th-first">Row</th>
            <th className="th-last">Name</th>
          </tr>
        </thead>
        <tbody>
          {associateTableData.map((option, index) => (
            <tr key={index} className="even:bg-[#eee]">
              <td className="td-primary w-10">
                <span className="flex justify-center">{index + 1}</span>
              </td>
              <td
                className="td-primary"
                onClick={() => {
                  setResourceName(option.name);
                  setResourceType('');
                }}
              >
                {option.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10 flex w-full items-center justify-end gap-5">
        <div
          className="btn-secondary cursor-pointer"
          onClick={() => setResourceType('')}
        >
          Save
        </div>
        <div
          className="btn-modalcancel cursor-pointer"
          onClick={() => setResourceType('')}
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default NewModal;
