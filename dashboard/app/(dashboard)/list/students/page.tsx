import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


const StudentsListpage = () => {

  const renderRow = (item: Student) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-systemPurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt="" width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover'/>
        <div className="flex flex-col ">
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gary-500'>{item.class}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td className=''>
        <div className="p-2 flex gap-2 ">
         
           <button className='w-7 h-7 flex items-center mb-1 justify-center rounded-full bg-systemSky'>
             <Image src="/view.png" alt='' width={16} height={16} />
           </button>
           {role=="admin" && 
              <FormModel table='teacher' type='delete' />
           }
         
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top */}
      <div className='flex items-center justify-between'>
         <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
         <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
         </div>
         <div className="flex items-center gap-4 self-end">
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-systemYellow'>
                <Image src="/filter.png" alt='' width={14} height={14}/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-systemYellow'>
                <Image src="/sort.png" alt='' width={14} height={14}/>
            </button>
           {role === 'admin' && 
              <FormModel table='teacher' type='create' />
           }
         </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={studentsData}/>
      <div className=""></div>
      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  )
}

export default StudentsListpage