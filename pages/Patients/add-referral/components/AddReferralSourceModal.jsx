import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
} from '@chakra-ui/react'
import FacilityForm from './referralforms/FacilityForm'
import PhysicianForm from './referralforms/PhysicianForm'
import SelfReferralForm from './referralforms/SelfReferralForm'
import HMOPPOForm from './referralforms/HMOPPOForm'
import IndividualReferralForm from './referralforms/IndividualReferralForm'
import InsuranceCompanyForm from './referralforms/InsuranceCompanyForm'
import TrustOfficerForm from './referralforms/TrustOfficerForm'
import GovernmentReferralForm from './referralforms/GovernmentReferralForm'
import { useState } from 'react'

const renderForm = (form) => {
  switch (form) {
    case 'physician':
      return <PhysicianForm />
    case 'facility':
      return <FacilityForm />
    case 'self-referral':
      return <SelfReferralForm />
    case 'hmo-ppo':
      return <HMOPPOForm />
    case 'individual-referral':
      return <IndividualReferralForm />
    case 'insurance-company':
      return <InsuranceCompanyForm />
    case 'trust-officer':
      return <TrustOfficerForm />
    case 'government-referral':
      return <GovernmentReferralForm />
    default:
      return <PhysicianForm />
  }
}

const AddReferralSourceModal = ({ openAddReferral, setOpenAddReferral }) => {
  const [activeForm, setActiveForm] = useState('physician')
  const forms = [
    { name: 'Physician', value: 'physician' },
    { name: 'Facility', value: 'facility' },
    { name: 'Self Referral', value: 'self-referral' },
    { name: 'HMO/PPO', value: 'hmo-ppo' },
    { name: 'Individual Referral', value: 'individual-referral' },
    { name: 'Insurance Company', value: 'insurance-company' },
    { name: 'Trust Officer', value: 'trust-officer' },
    { name: 'Government Referral', value: 'government-referral' },
  ]
  return (
    <div>
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <div>
              <ModalHeader>
                Add Referral
                <p className='text-sm text-gray-600'>add referal details</p>
              </ModalHeader>
            </div>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='my-2 flex'>
                <p className='mr-3 w-[20%] text-right font-semibold'>
                  <span className='font-bold text-secondary-color'>*</span>
                  Referral Type:
                </p>

                <div className='w-[70%]'>
                  <Select
                    size='xs'
                    onChange={(e) => setActiveForm(e.target.value)}
                  >
                    {forms.map((form, index) => (
                      <option
                        key={index}
                        value={form.value}
                        className='text-gray-800'
                      >
                        {form.name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              {/* Render Form */}
              {renderForm(activeForm)}

              <div className='mx-auto flex justify-center p-5'>
                <div>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Save
                  </button>
                  <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Cancel
                  </button>
                </div>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddReferralSourceModal
