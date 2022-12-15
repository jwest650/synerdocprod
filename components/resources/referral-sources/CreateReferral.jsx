import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import TableSelect from '../../structure/TableSelect';
import FacilityInputs from './FacilityInputs';
import GovReferralInputs from './GovReferralInputs';
import HMOPPOInputs from './HMOPPOInputs';
import IndividualReferralInputs from './IndividualReferralInputs';
import InsuranceCompanyInputs from './InsuranceCompanyInputs';
import PhysicianInputs from './PhysicianInputs';
import SelfReferralInputs from './SelfReferralInputs';
import TrustOfficerInputs from './TrustOfficerInputs';

const CreateReferral = ({ edit, action }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [referralType, setReferralType] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen}>{action}</span>

      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="verdana12 w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                {edit ? 'Edit' : 'Create'} Referral Source
              </h1>
              <p className="verdana-12 text-gray-400">
                {edit ? 'Edit' : 'Create'} Referral Source details{' '}
              </p>

              <div className="mt-6 flex  w-full flex-col items-center gap-3.5 pr-8">
                <div className="flex w-full items-center justify-center gap-3 ">
                  <label className="flex w-[42%]  justify-end">
                    <span className="text-primary-orange">*</span>Referral Type:{' '}
                  </label>
                  <div className=" flex w-[58%] items-center">
                    <TableSelect
                      setSelectedOption={setReferralType}
                      options={[
                        '<--select-->',
                        'Physician',
                        'Facility',
                        'Self Referral',
                        'HMO/PPO',
                        'Individual Referral',
                        'Insurance Company',
                        'Trust Officer',
                        'Government Referral',
                      ]}
                    />
                  </div>
                </div>
                {referralType === '<--select-->' && (
                  <p className="text-primary-orange ">Referral Type Required</p>
                )}
                {referralType === 'Physician' && <PhysicianInputs />}
                {referralType === 'Facility' && <FacilityInputs />}
                {referralType === 'Self Referral' && <SelfReferralInputs />}
                {referralType === 'HMO/PPO' && <HMOPPOInputs />}
                {referralType === 'Individual Referral' && (
                  <IndividualReferralInputs />
                )}
                {referralType === 'Insurance Company' && (
                  <InsuranceCompanyInputs />
                )}
                {referralType === 'Trust Officer' && <TrustOfficerInputs />}
                {referralType === 'Government Referral' && (
                  <GovReferralInputs />
                )}
              </div>

              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateReferral;
