import Announcements from "@/components/Announcements";
import BigCalander from "@/components/BigCalander";
import EventCalander from "@/components/EventCalander";
import React from "react";
const StudentsPage = () => {
    return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row"> 
      {/* LEFt */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalander />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="">
         <EventCalander />
         <Announcements />
        </div>
      </div>
    </div>
    );
}

export default StudentsPage;