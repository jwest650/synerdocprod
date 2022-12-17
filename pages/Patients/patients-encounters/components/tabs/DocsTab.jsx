import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { FcPrint } from 'react-icons/fc'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TfiPencilAlt } from 'react-icons/tfi'
import AddFormModal from './components/docstab/AddFormModal'
import UploadDocumentModal from './components/docstab/UploadDocumentModal'
import { IoIosArrowDown } from 'react-icons/io'

const DocsTab = () => {
  const [openAddForm, setOpenAddForm] = useState(false)
  const [openUploadDocument, setOpenUploadDocument] = useState(false)

  return (
    <div className='verdana13 space-y-3 '>
      <section className='flex items-center justify-between'>
        <header className='flex items-center space-x-4'>
          <h1 className='verdana16'>Forms</h1>
          <button
            className='btn-primary flex items-center'
            onClick={() => setOpenAddForm(true)}
          >
            <BsPlus className='verdana16  text-green-500' />
            Add Forms
          </button>
        </header>
        <button className='text-orange-500 underline'>
          show form / document requirement
        </button>
      </section>
      <section>
        <table className='w-full text-left  capitalize'>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first '>type</th>
              <th className='th-middle '>created</th>
              <th className='th-middle '>performed by</th>
              <th className='th-middle '>revised by</th>
              <th className='th-middle '>status</th>
              <th className='th-middle '></th>
              <th className='th-middle '></th>
              <th className='th-middle '></th>
              <th className='th-last '></th>
            </tr>
          </thead>
          <tbody>
            <tr className=' bg-light-blue'>
              <td className='td-primary'>
                <Select size={'xs'} css={{ backgroundColor: '#eee' }}>
                  <option value=''>option</option>
                </Select>
              </td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'>
                <Select size={'xs'} css={{ backgroundColor: '#eee' }}>
                  <option value=''>option</option>
                </Select>
              </td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
            </tr>
            {obj.map((val, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary '>
                  <TfiPencilAlt />
                </td>
                <td className='td-primary '>
                  <FcPrint />
                </td>
                <td className='td-primary '>
                  <RiDeleteBin6Line />
                </td>
                <td className='td-primary '>
                  <IoIosArrowDown />
                </td>
              </tr>
            ))}
            <p>no record to display</p>
          </tbody>
        </table>
      </section>

      <section className='mt-12 flex items-center justify-between'>
        <header className='mt-14 flex items-center space-x-4'>
          <h1 className='verdana16'>Documets</h1>
          <button
            className='btn-primary flex items-center'
            onClick={() => setOpenUploadDocument(true)}
          >
            <BsPlus className='verdana16  text-green-500' />
            Upload Documents
          </button>
        </header>
        <div className='flex'>
          <button className='mr-3 text-orange-500 underline'>
            set defaults
          </button>
          <button className='mr-3'>show all documents related to</button>
          <div>
            <Select size={'xs'} css={{ backgroundColor: '#eee' }}>
              <option value=''>Encounter</option>
            </Select>
          </div>
        </div>
      </section>
      <section>
        <button className='mr-3 text-orange-500 underline'>
          Download / Print Selected documents
        </button>

        <table className='w-full text-left  capitalize'>
          <thead className='thead-primary'>
            <tr>
              <th className='th-first '>Print</th>
              <th className='th-middle '>Related To</th>
              <th className='th-middle '>Documnt Type</th>
              <th className='th-middle '>Status</th>
              <th className='th-middle '>Document Description</th>
              <th className='th-middle '>uploaded By</th>
              <th className='th-middle '>uploaded </th>
              <th className='th-last '></th>
            </tr>
          </thead>
          <tbody>
            <tr className=' bg-light-blue'>
              <td className='td-primary'></td>

              <td className='td-primary'></td>
              <td className='td-primary'>
                <Select size={'xs'} css={{ backgroundColor: '#eee' }}>
                  <option value=''>option</option>
                </Select>
              </td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
              <td className='td-primary'></td>
            </tr>
            {obj.map((val, i) => (
              <tr
                key={i}
                className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
              >
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
                <td className='td-primary'></td>
              </tr>
            ))}
            <p>no record to display</p>
          </tbody>
        </table>
      </section>

      {/* Modals */}
      <AddFormModal openAddForm={openAddForm} setOpenAddForm={setOpenAddForm} />
      <UploadDocumentModal
        openUploadDocument={openUploadDocument}
        setOpenUploadDocument={setOpenUploadDocument}
      />
    </div>
  )
}

export default DocsTab

const obj = [
  {
    type: 'dd',
    created: '',
    performed: '',
    revised: '',
    status: '',
  },
]
