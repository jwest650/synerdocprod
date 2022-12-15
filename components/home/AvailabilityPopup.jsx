import { SiVercel } from 'react-icons/si';
import { availabilityPopup } from './homeData';

const AvailabilityPopup = () => {
  return (
    <div className="verdana10 absolute top-5 -left-[136px] z-10 ">
      <span className="-mt-0.5 flex w-full justify-center text-secondary-blue">
        <SiVercel className="" />
      </span>
      <div className="moreInfo-anim w-72 rounded border-[4px] border-t-[10px] border-secondary-blue bg-white">
        <table className="w-full">
          <tbody>
            {availabilityPopup.map((option, index) => (
              <tr key={index} className="even:bg-secondary-blue">
                <td className="td-primary">{option.day}</td>
                <td className="td-primary">{option.time}</td>
                <td className="td-primary">{option.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailabilityPopup;
