import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
} from '@chakra-ui/react'

const PrintModal = ({ openPrint, setOpenPrint }) => {
  return (
    <div>
      <Modal
        isOpen={openPrint}
        onClose={() => setOpenPrint(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <h1 className='verdana16 font-bold'>
                Select Infomation to print
              </h1>
              <section className=' flex flex-col'>
                <Checkbox className='my-2'>Drug Interaction</Checkbox>
                <Checkbox className='my-2'>Warnings</Checkbox>
                <Checkbox className='my-2'>Food Interactions</Checkbox>
                <Checkbox className='my-2'>Side Effects</Checkbox>
                <Checkbox className='my-2'>Pharmacology</Checkbox>
              </section>
              <button className='btn-primary'>Export</button>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PrintModal
