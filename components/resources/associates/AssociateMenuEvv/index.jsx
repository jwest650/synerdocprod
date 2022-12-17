import { evvDrivingData } from '../associateData';
import { evvVisitData } from '../associateDatatwo';

const AssociateMenuEvv = () => {
  return (
    <div>
      <div className="mx-6 mt-5 mb-16">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">Service Date:</h2>
          <input type="date" className="input-primary" />
        </div>
        <div className="mt-8">
          <h2 className="verdana16 font-semibold">Visit Verification</h2>
          <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
            <thead className="thead-primary">
              <tr className="verdana11">
                <th className="th-first">Date</th>
                <th className="th-middle">Type</th>
                {/* <th className="th-middle">Patient Name</th>
                <th className="th-middle">Type of Service</th>
                <th className="th-middle">GPS Location</th> */}
                <th className="th-last">Note</th>
              </tr>
            </thead>
            <tbody>
              {evvVisitData.map((visit, index) => (
                <tr key={index} className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary w-52">{visit.date}</td>
                  <td className="td-primary">{visit.type}</td>
                  <td className="td-primary">{visit.note} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-14">
          <h2 className="verdana16 font-semibold">Driving</h2>
          <table className="mx-auto mt-3 w-full overflow-auto px-3 shadow-md">
            <thead className="thead-primary">
              <tr className="verdana11">
                <th className="th-first">Date</th>
                <th className="th-middle">Type</th>
                {/* <th className="th-middle">Patient Name</th>
                <th className="th-middle">Type of Service</th>
                <th className="th-middle">GPS Location</th> */}
                <th className="th-last">Note</th>
              </tr>
            </thead>
            <tbody>
              {evvDrivingData.map((driving, index) => (
                <tr key={index} className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary w-52">{driving.date}</td>
                  <td className="td-primary">{driving.type}</td>
                  <td className="td-primary">{driving.note} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AssociateMenuEvv;
