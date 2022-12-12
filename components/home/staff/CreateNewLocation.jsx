import TableSelect from '../../structure/TableSelect';
import { states } from '../homeData';

const CreateNewLocation = ({ setNewLocation }) => {
  return (
    <div className="mx-auto mt-4 max-w-md">
      <h3 className="verdana16 border-b border-primary-gray font-semibold">
        Add New Location
      </h3>
      <div className="mt-4 flex flex-col items-center gap-3">
        <TableSelect
          styles={{ width: '100%' }}
          options={[
            '<--select address-->',
            'Sinam Care, LLC, 153 Virginia St. Hillside NJ 07205',
          ]}
        />
        or
        <input
          type="text"
          placeholder="Location Description"
          className="input-primary w-full"
        />
        <div className="flex w-full items-center gap-2">
          <input
            type="text"
            placeholder="Location Description"
            className="input-primary w-full"
          />
          <input
            type="text"
            placeholder="Location Description"
            className="input-primary w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Location Description"
            className="input-primary w-[50%]"
          />
          <div className="flex w-[50%] items-center gap-2">
            <TableSelect
              styles={{ width: '70%' }}
              options={['<--select state-->', ...states]}
            />
            <input
              type="text"
              placeholder="Zip"
              className="input-primary w-[30%] "
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-7">
        <div className="flex items-center gap-2">
          <input
            id="startinglocation1"
            type="checkbox"
            className="input-primary"
          />
          <label htmlFor="startinglocation1">Starting Location</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="endinglocation1"
            type="checkbox"
            className="input-primary"
          />
          <label htmlFor="endinglocation1">Ending Location</label>
        </div>
      </div>
      <div>
        <div className="mt-6 flex w-full gap-4">
          <button
            onClick={() => setNewLocation(false)}
            className="rounded bg-primary-blue px-4 py-1 text-white shadow"
          >
            Save
          </button>
          <button
            onClick={() => setNewLocation(false)}
            className="cursor-pointer rounded bg-gray-500 px-4 py-1 text-white shadow"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLocation;
