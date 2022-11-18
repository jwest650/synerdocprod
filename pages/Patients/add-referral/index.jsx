import { useState } from 'react'
import ContactInfoForm from './components/ContactInfoForm'
import CreateReferralForm from './components/CreateReferralForm'
import FinishReferralForm from './components/FinishReferralForm'
import SetupPatientForm from './components/SetupPatientForm'

const AddReferral = () => {
  let data = [1, 1, 1, 1]

  const [step, setStep] = useState(1)

  return (
    <div className='w-full'>
      {/* Step Indicator */}
      <div className='my-7 flex w-full justify-center'>
        <ul className='mb-10 flex items-center gap-3'>
          <li className={`  w-48`}>
            <div className='flex w-full items-center'>
              <div
                className={`w-full rounded-l-full  ${
                  step === 1 ? 'bg-primary-orange' : 'bg-secondary-blue'
                }  py-2`}
              />
              <div
                className={` -ml-[13px] w-full -skew-x-[30deg] py-2 ${
                  step === 1 ? 'bg-primary-orange' : 'bg-secondary-blue'
                }`}
              />
            </div>
            <span className='mx-6 mt-2'>Create Referral</span>
          </li>
          <li className={`  w-48`}>
            <div
              className={`   -skew-x-[30deg] py-2   ${
                step === 2 ? 'bg-primary-orange' : 'bg-secondary-blue'
              }`}
            />
            <span className='mx-6 mt-2'>Set Up Patients</span>
          </li>
          <li className={`  w-48`}>
            <div
              className={`   -skew-x-[30deg]  py-2   ${
                step === 3 ? 'bg-primary-orange' : 'bg-secondary-blue'
              }`}
            />
            <span className='mx-6 mt-2'>Contact Info</span>
          </li>
          <li className={`  w-48`}>
            <div className='flex w-full items-center'>
              <div
                className={` -mr-[13px] w-full -skew-x-[30deg] ${
                  step === 4 ? 'bg-primary-orange' : 'bg-secondary-blue'
                } py-2`}
              />
              <div
                className={` w-full rounded-r-full ${
                  step === 4 ? 'bg-primary-orange' : 'bg-secondary-blue'
                } py-2`}
              />
            </div>{' '}
            <span className='mx-6 mt-2'>Finish Referral</span>
          </li>
        </ul>
      </div>

      <section className=' mx-auto w-[80%]  '>
        {step == 1 && <CreateReferralForm />}
        {step == 2 && <SetupPatientForm />}
        {step == 3 && <ContactInfoForm />}
        {step == 4 && <FinishReferralForm />}

        {step >= 1 && step < 4 ? (
          <ul className='flex justify-end'>
            {step > 1 ? (
              <button
                className='rounded border bg-secondary-color px-4 text-white'
                onClick={() => step > 1 && setStep(step - 1)}
              >
                Back
              </button>
            ) : null}
            <button
              className='ml-3 rounded border bg-secondary-color px-4  text-white'
              onClick={() => step < 4 && setStep(step + 1)}
            >
              Next
            </button>
          </ul>
        ) : null}
        {step == 4 ? (
          <ul className='flex justify-end'>
            <button
              className='ml-3 rounded border bg-secondary-color px-4  text-white'
              // onClick={() => step < 4 && setStep(step + 1)}
            >
              finish/view
            </button>
            <button
              className='ml-3 rounded border bg-secondary-color px-4  text-white'
              onClick={() => setStep(1)}
            >
              finish/close
            </button>
          </ul>
        ) : null}
      </section>
    </div>
  )
}

export default AddReferral
