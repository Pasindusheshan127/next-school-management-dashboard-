import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header:"Info", 
    accessor:"info"
  },
  {
    header:"Teacher ID", 
    accessor:"teacher ID", 
    className:"hidden md:table-cell",
  },
  {
    header:"Subjects", 
    accessor:"subjects", 
    className:"hidden md:table-cell",
  },
  {
    header:"Classes", 
    accessor:"classes", 
    className:"hidden md:table-cell",
  },
  {
    header:"Phone", 
    accessor:"Phone", 
    className:"hidden lg:table-cell",
  },
  {
    header:"Address",  
    accessor:"address", 
    className:"hidden lg:table-cell",
  },
  {
    header:"Action", 
    accessor:"action"
  },
]

const TeacherListpage = () => {

  const renderRow = (item: Teacher) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-systemPurpleLight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt="" width={40} height={40} className='md:hidden xl:block w-10 h-10 rounded-full object-cover'/>
        <div className="flex flex-col ">
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gary-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(",")}</td>
      <td className='hidden md:table-cell'>{item.classes.join(",")}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td className=''>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
           <button className='w-7 h-7 flex items-center justify-center rounded-full bg-systemSky'>
             <Image src="/view.png" alt='' width={16} height={16} />
           </button>
           {role=="admin" && <button className='w-7 h-7 flex items-center justify-center rounded-full bg-systemPurple'>
             <Image src="/delete.png" alt='' width={16} height={16} />
           </button>}
          </Link>
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top */}
      <div className='flex items-center justify-between'>
         <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
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
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-systemYellow'>
                <Image src="/plus.png" alt='' width={14} height={14}/>
            </button>
         </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      <div className=""></div>
      {/* Pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  )
}

export default TeacherListpage