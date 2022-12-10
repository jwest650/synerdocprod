import React from 'react'

const Form = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <p>Hold Down Ctrl and F to search</p>
        <div className='flex'>
          <button className='btn-primary ml-3'>Save/Continue</button>
          <button className='btn-primary ml-3'>Save/Close</button>
          <button className='btn-primary ml-3'>Compete</button>
          <button className='btn-primary ml-3'>Cancel</button>
        </div>
      </div>

      <div className='flex min-h-[300px] w-full items-center justify-center'>
        <div>
          <h1 className='verdana18'>Org/Agency Name: Homecare</h1>
          <h1 className='verdana18'>Patient Name: James Bruce</h1>
          <h1 className='verdana18'>Form Type: 60 Day Summary</h1>
        </div>
      </div>

      <div>
        <button className='mb-5 rounded border border-gray-400 px-4'>
          Apply Signatures
        </button>
        <p className='text-orange-600 underline'>
          Patient/Responsibility Party Signature
        </p>
        <p className='text-orange-600 underline'>
          Agency Representative Signature
        </p>
      </div>
    </div>
  )
}

export default Form
