import { patients } from '../../homeData';

const ResourceTable = ({ onClose, setShowTable }) => {
  return (
    <>
      <table className="mt-6 min-w-full overflow-auto shadow-md">
        <thead className="thead-primary">
          <tr>
            <th className="th-first">Select</th>
            <th className="th-middle">First Name</th>
            <th className="th-middle">Last Name</th>
            <th className="th-last">Start of Care</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((person, index) => (
            <tr key={index} className={` w-full border even:bg-[#eeeeee]`}>
              <td className="td-primary w-10">
                <div className="flex justify-center">
                  <input type="checkbox" className="input-primary" />
                </div>
              </td>
              <td className="td-primary ">{person.name.split(' ')[0]}</td>
              <td className="td-primary ">{person.name.split(' ')[1]}</td>
              <td className="td-primary ">{person.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex w-full justify-end gap-3">
        <button
          onClick={() => {
            onClose();
            setShowTable(false);
          }}
          className="btn-primary"
        >
          Save
        </button>
        <button
          onClick={() => {
            onClose();
            setShowTable(false);
          }}
          className="btn-primary"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ResourceTable;
