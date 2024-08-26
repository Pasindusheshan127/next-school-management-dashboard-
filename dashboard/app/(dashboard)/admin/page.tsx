import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalander from "@/components/EventCalander";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";
const AdminPage = () => {
    return (
    <div className="p-4 flex gap-4 flex-col md:flex-row -100 h-full"> 
    {/*left*/}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* user card */}
       <div className="flex gap-4 justify-between flex-wrap">
         <UserCard type="students"/>
         <UserCard type="teachers"/>
         <UserCard type="parents"/>
         <UserCard type="staf"/>
       </div>
       {/* Middle Chart */}
       <div className="flex gap-4 flex-col lg:flex-row ">
        {/* Count Chart */}
        <div className="w-full lg:w-1/3 h-[450px}">
         <CountChart />
        </div>
        {/* Attendent Chart */}
        <div className="w-full lg:w-2/3 h-[450px}">
         <AttendanceChart />
        </div>
       </div>
       {/* Bottom Chart */}
       <div className="w-full h-[500px]">
        <FinanceChart />
       </div>
      </div>
    {/*right*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalander />
        <Announcements />
      </div>
    </div>
 )
}

export default AdminPage;