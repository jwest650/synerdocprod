import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import ContactInfo from './components/ContactInfo';
import CreateReferralForm from './components/CreateReferralForm';
import FinishReferralForm from './components/FinishReferralForm';
import SetupPatientForm from './components/SetupPatientForm';

const AddReferral = () => {
  let data = [1, 1, 1, 1];
  const [openFindReferral, setOpenFindReferral] = useState(false);
  const [openAddReferral, setOpenAddReferral] = useState(false);

  const [step, setStep] = useState(3);

  return (
    <div className='w-full'>
      {/* Step Indicator */}
      <div className='relative mx-auto w-[60%]'>
        <ul className='bg-orage before:content[] flex  items-center justify-between py-2  text-center before:absolute before:top-[0] before:block before:h-[10px] before:w-[100%] before:bg-gray-700'>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 1 ? 'before:bg-[#E77654]' : 'before:bg-gray-700'
            }`}
          >
            Create Referral
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 2 ? 'before:bg-[#E77654]' : 'before:bg-gray-700'
            }`}
          >
            Set Up Patients
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] before:border-r-2 ${
              step === 3 ? 'before:bg-[#E77654]' : 'before:bg-gray-700'
            }`}
          >
            Contact Info
          </li>
          <li
            className={`bg-gray before:content[] w-[25%] text-center text-2xl before:absolute before:top-[0] before:block before:h-[10px] before:w-[25%] ${
              step === 4 ? 'before:bg-[#E77654]' : 'before:bg-gray-700'
            }`}
          >
            Finish Referral
          </li>
        </ul>
      </div>
      <section className=' mx-auto w-[80%]  '>
        {step == 1 && <CreateReferralForm />}
        {step == 2 && <SetupPatientForm />}
        {step == 3 && <ContactInfo />}
        {step == 4 && <FinishReferralForm />}

        <ul className='flex justify-end'>
          <button
            className='rounded border bg-gray-800 px-9 py-2 text-white'
            onClick={() => step > 1 && setStep(step - 1)}
          >
            back
          </button>
          <button
            className='ml-3 rounded border bg-gray-800 px-9 py-2 text-white'
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
