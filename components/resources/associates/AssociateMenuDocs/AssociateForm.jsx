import { Kbd } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import TableSelect from '../../../structure/TableSelect';

const AssociateForm = ({ setShowForm }) => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="verdana12 font-semibold text-primary-orange">
              Hold down{' '}
              <span className="verdana16">
                <Kbd>ctrl</Kbd>{' '}
                <span className="verdana12 font-medium">then</span> <Kbd>f</Kbd>
              </span>{' '}
              to Search
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowForm(false)} className="btn-primary">
              Save/Continue
            </button>
            <button onClick={() => setShowForm(false)} className="btn-primary">
              Save/Close
            </button>
            <button onClick={() => setShowForm(false)} className="btn-primary">
              Complete
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="verdana12 rounded bg-primary-gray px-2.5 py-[2px]  text-white "
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="verdana12 mt-10 flex items-center gap-1">
          <label>Navigate to:</label>
          <TableSelect options={['Top', 'Option2']} />
        </div>
      </div>
      <div className="verdana12 mt-4">
        <div className="flex w-full items-center justify-center gap-2 font-semibold">
          <label>Org/Agency Name: </label>
          <p className="mr-9">ESI Demo</p>
        </div>
        <div className="mt-1 flex w-full items-center justify-center gap-2 font-semibold">
          <label>Associate Name: </label> <p> {associateUrl}</p>
        </div>
        <p className="mt-7 rounded bg-secondary-blue px-2">
          Form - 90 Day Evaluation
        </p>
        <div className="mt-5 flex gap-5">
          <h3>
            Attendance: Consider frequency of absences (e.g. sickness,
            unexpected absences, etc)
          </h3>
          <ul>
            <li className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" id="opt1" className="input-primary" />
              <label htmlFor="opt1">Rarely absent</label>{' '}
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" id="opt2" className="input-primary" />
              <label htmlFor="opt2">Very regular in attendance</label>{' '}
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" id="opt3" className="input-primary" />
              <label htmlFor="opt3">Usually present</label>{' '}
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" id="opt4" className="input-primary" />
              <label htmlFor="opt4">Irregular in attendance</label>{' '}
            </li>
            <li className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" id="opt5" className="input-primary" />
              <label htmlFor="opt5">Frequently absent</label>{' '}
            </li>
          </ul>
        </div>
        <div className="mt-7 flex w-full flex-col items-center gap-3.5">
          <div className="flex w-full items-center justify-center gap-3 ">
            <p className="flex w-[43%]  justify-end">Comments:</p>
            <div className=" flex w-[56%] gap-2">
              <textarea className="w-60 rounded border border-secondary-blue shadow-sm" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <p className="flex w-[43%] justify-end">Evaluated by:</p>
            <div className=" flex w-[56%] items-center gap-2">
              <input type="text" className="input-primary w-60" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <p className="flex w-[43%] justify-end">Date:</p>
            <div className=" flex w-[56%] items-center gap-2">
              <input type="date" className="input-primary" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 ">
            <p className="flex w-[43%] justify-end">
              Employee&apos;s Comments:
            </p>
            <div className=" flex w-[56%] ">
              <textarea className="input-primary w-60" />{' '}
            </div>
          </div>

          <div className="flex w-full justify-center gap-3 ">
            <p className="flex w-[43%] justify-end">
              This evaluation has been discussed with employee?:
            </p>
            <div className=" flex w-[56%] flex-col">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="yes" className="input-primary" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="no" className="input-primary" />
                <label htmlFor="no">No (explain below)</label>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-3 ">
            <p className="flex w-[43%] justify-end">Explanation:</p>
            <div className=" flex w-[56%] ">
              <textarea type="text" className="input-primary w-60" />
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-10">
          <button className="btn-primary">Apply Signature</button>
          <p className="text-primary-orange underline">
            Representative Signature
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssociateForm;
