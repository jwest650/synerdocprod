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
import FacilityForm from './referralforms/FacilityForm';
import GovernmentReferralForm from './referralforms/GovernmentReferralForm';
import HMOPPOForm from './referralforms/HMOPPOForm';
import IndividualReferralForm from './referralforms/IndividualReferralForm';
import InsuranceCompanyForm from './referralforms/InsuranceCompanyForm';
import PhysicianForm from './referralforms/PhysicianForm';
import SelfReferralForm from './referralforms/SelfReferralForm';
import TrustOfficerForm from './referralforms/TrustOfficerForm';

const AddReferralSourceModal = ({ openAddReferral, setOpenAddReferral }) => {
  const [referralType, setReferralType] = useState('physician');
  let options = [
    { name: 'Physician', value: 'physician' },
    { name: 'Facility', value: 'facility' },
    { name: 'Self Referral', value: 'self-referral' },
    { name: 'HMO/PPO', value: 'hmoppo' },
    { name: 'Individual Referral', value: 'individual-referral' },
    { name: 'Insurance Company', value: 'insurance-company' },
    { name: 'Trust Officer', value: 'trust-officer' },
    { name: 'Government Referral', value: 'government-referral' },
  ];

  const DisplayForms = () => {
    switch (referralType) {
      case 'physician':
        return <PhysicianForm />;
      case 'facility':
        return <FacilityForm />;
      case 'self-referral':
        return <SelfReferralForm />;
      case 'hmoppo':
        return <HMOPPOForm />;
      case 'individual-referral':
        return <IndividualReferralForm />;
      case 'insurance-company':
        return <InsuranceCompanyForm />;
      case 'trust-officer':
        return <TrustOfficerForm />;
      case 'government-referral':
        return <GovernmentReferralForm />;

      default:
        break;
    }
  };
  return (
    <div>
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div>
            <ModalHeader>
              Add Referral
              <p className='text-sm text-gray-600'>add referal details</p>
            </ModalHeader>
          </div>
          <ModalCloseButton />
          <ModalBody>
            <div className='my-2 flex'>
              <label htmlFor='#' className='w-[20%]'>
                Referral Type:{' '}
              </label>
              <div className='w-[70%]'>
                <Select
                  size='xs'
                  onChange={(e) => setReferralType(e.target.value)}
                >
                  {options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Forms */}
            {<DisplayForms />}
          </ModalBody>

          <div className='mx-auto p-5'>
            <Button colorScheme='gray' size={'sm'} mr={'3'}>
              Save
            </Button>
            <Button colorScheme='gray' size={'sm'}>
              Cancel
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddReferralSourceModal;
