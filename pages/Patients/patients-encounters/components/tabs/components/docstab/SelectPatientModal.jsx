import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

const SelectPatientModal = ({
  openSelectPatient,
  setOpenSelectPatient,
  setPatient,
}) => {
  let data = [1, 1, 1, 1, 1]
  const handleSelect = (name) => {
    setPatient(name)
    setOpenSelectPatient(false)
  }

  return (
    <div>
      <Modal
        isOpen={openSelectPatient}
        onClose={() => setOpenSelectPatient(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div className='flex justify-between'>
                <h1 className=' verdana18  font-bold'>All Patients</h1>
                <div className='flex'>
                  <input type='text' className='input-primary' />
                  <button className='btn-primary ml-3'>Search</button>
                </div>
              </div>

              <div>
                <table className='mt-7 w-full'>
                  <thead className='thead-primary'>
                    <tr>
                      <th className='th-first w-[20px]'>Row</th>
                      <th className='th-last '>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr key={i} onClick={() => handleSelect('James Mark')}>
                        <td className='td-primary'>1</td>
                        <td className='td-primary'>James Mark</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='ml-3 mt-12 flex justify-end'>
                <button
                  className='btn-primary ml-3'
                  onClick={() => setOpenSelectPatient(false)}
                >
                  Save
                </button>
                <button
                  className='btn-primary ml-3'
                  onClick={() => setOpenSelectPatient(false)}
                >
                  Close
                </button>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SelectPatientModal
