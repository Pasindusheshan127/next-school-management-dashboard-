import React from 'react'

const Announcements = () => {
  return (
    <div>
      <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcement</h1>
            <span className='text-xs text-garay-400'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-systemSkyLight ronded-md p-4'>
           <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                2025-01-02
            </span>
           </div>
           <p className='text-xs text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero assumenda nisi nam, sapiente asperiores corrupti, numquam nihil officia et, odio maiores ullam autem voluptatem iure quasi nobis veniam quas!</p>
        </div>
        <div className='bg-systemPurpleLight ronded-md p-4'>
           <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                2025-01-02
            </span>
           </div>
           <p className='text-xs text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero assumenda nisi nam, sapiente asperiores corrupti, numquam nihil officia et, odio maiores ullam autem voluptatem iure quasi nobis veniam quas!</p>
        </div>
        <div className='bg-systemyellowLight ronded-md p-4'>
           <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                2025-01-02
            </span>
           </div>
           <p className='text-xs text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero assumenda nisi nam, sapiente asperiores corrupti, numquam nihil officia et, odio maiores ullam autem voluptatem iure quasi nobis veniam quas!</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Announcements