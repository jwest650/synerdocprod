import { Kbd } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import TableSelect from '../../../structure/TableSelect';
import {
  appearanceForm,
  attendanceForm,
  attitudeForm,
  cooperationForm,
  dependabilityForm,
  developmentForm,
  knowledgeofworkForm,
  overallForm,
  publicRelationsForm,
  punctualityForm,
  quantityForm,
  ratingAbilityForm,
  supervisionForm,
} from '../associateDataFour';
import FormFields from './FormFields';
import TextFormFields from './TextFormFields';

const AssociateForm = ({ setShowForm, formType }) => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];

  const [attendance, setAttendance] = useState(attendanceForm);
  const [punctuality, setPunctuality] = useState(punctualityForm);
  const [attitude, setAttitude] = useState(attitudeForm);
  const [appearance, setAppearance] = useState(appearanceForm);
  const [dependability, setDependability] = useState(dependabilityForm);
  const [development, setDevelopment] = useState(developmentForm);
  const [knowledgeofwork, setKnowledgeofwork] = useState(knowledgeofworkForm);
  const [cooperation, setCooperation] = useState(cooperationForm);
  const [quantity, setQuantity] = useState(quantityForm);
  const [supervision, setSupervision] = useState(supervisionForm);
  const [publicRelations, setPublicRelations] = useState(publicRelationsForm);
  const [ratingAbility, setRatingAbility] = useState(ratingAbilityForm);
  const [overall, setOverall] = useState(overallForm);

  // console.log(attendance.selectedOption);
  // console.log(punctuality.selectedOption);
  // console.log(attitude.selectedOption);
  // console.log(appearance.selectedOption);
  // console.log(dependability.selectedOption);
  // console.log(development.selectedOption);
  // console.log(knowledgeofwork.selectedOption);
  // console.log(cooperation.selectedOption);
  // console.log(quantity.selectedOption);
  // console.log(supervision.selectedOption);
  // console.log(publicRelations.selectedOption);
  // console.log(ratingAbility.selectedOption);
  // console.log(overall.selectedOption);
  return (
    <div>
      <div className="rounded bg-amber-200 p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="verdana12 font-semibold text-primary-orange">
              Hold down{' '}
              <span className="verdana16">
                <Kbd>ctrl</Kbd>{' '}
                <span className="verdana12 font-medium">and then</span>{' '}
                <Kbd>f</Kbd>
              </span>
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
          <p className="mr-9">Sinam Care LLC</p>
        </div>
        <div className="mt-1 flex w-full items-center justify-center gap-2 font-semibold">
          <label>Associate Name: </label> <p> {associateUrl}</p>
        </div>
        <p className="mt-7 rounded bg-secondary-blue py-1 px-3">
          Associate Form - {formType}
        </p>
        <FormFields setFormObj={setAttendance} formObj={attendance} />
        <FormFields setFormObj={setPunctuality} formObj={punctuality} />
        <FormFields setFormObj={setAttitude} formObj={attitude} />
        <FormFields setFormObj={setAppearance} formObj={appearance} />
        <FormFields setFormObj={setDependability} formObj={dependability} />
        <FormFields setFormObj={setDevelopment} formObj={development} />
        <FormFields setFormObj={setKnowledgeofwork} formObj={knowledgeofwork} />
        <FormFields setFormObj={setCooperation} formObj={cooperation} />
        <FormFields setFormObj={setQuantity} formObj={quantity} />
        <FormFields setFormObj={setSupervision} formObj={supervision} />
        <FormFields setFormObj={setPublicRelations} formObj={publicRelations} />
        <FormFields setFormObj={setRatingAbility} formObj={ratingAbility} />
        <FormFields setFormObj={setOverall} formObj={overall} />

        <TextFormFields />
        <div className="mt-8 space-y-7 px-10">
          <button className="btn-primary">Apply Signature</button>
          <p className="text-primary-orange underline">Associate Signature</p>
          <p className="text-primary-orange underline">
            Representative Signature
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssociateForm;
