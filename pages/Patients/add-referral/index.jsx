import { useState } from 'react';
import ContactInfoForm from './components/ContactInfoForm';
import CreateReferralForm from './components/CreateReferralForm';
import FinishReferralForm from './components/FinishReferralForm';
import SetupPatientForm from './components/SetupPatientForm';

const AddReferral = () => {
  let data = [1, 1, 1, 1];

  const [step, setStep] = useState(1);

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="relative mx-auto w-[60%]">
        <ul className="bg-orage before:content[] flex  items-center justify-between py-2  text-center before:absolute before:top-[0] before:block before:h-[10px] before:w-[100%] before:bg-primary-color">
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 1
                ? 'before:bg-secondary-color'
                : 'before:bg-primary-color'
            }`}
          >
            Create Referral
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 2
                ? 'before:bg-secondary-color'
                : 'before:bg-primary-color'
            }`}
          >
            Set Up Patients
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 3
                ? 'before:bg-secondary-color'
                : 'before:bg-primary-color'
            }`}
          >
            Contact Info
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] ${
              step === 4
                ? 'before:bg-secondary-color'
                : 'before:bg-primary-color'
            }`}
          >
            Finish Referral
          </li>
        </ul>
      </div>

      <section className=" mx-auto w-[80%]  ">
        {step == 1 && <CreateReferralForm />}
        {step == 2 && <SetupPatientForm />}
        {step == 3 && <ContactInfoForm />}
        {step == 4 && <FinishReferralForm />}

        <ul className="flex justify-end">
          <button
            className="rounded border bg-secondary-color px-9 py-2 text-white"
            onClick={() => step > 1 && setStep(step - 1)}
          >
            back
          </button>
          <button
            className="ml-3 rounded border bg-secondary-color px-9 py-2 text-white"
            onClick={() => step < 4 && setStep(step + 1)}
          >
            next
          </button>
        </ul>
      </section>
    </div>
  );
};

export default AddReferral;
