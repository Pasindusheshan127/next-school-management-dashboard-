import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";
const AdminPage = () => {
    return (
    <div className="p-4 flex gap-4 flex-col md:flex-row bg-slate-100 h-full"> 
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
       <div></div>
      </div>
    {/*right*/}
      <div className="w-full lg:w-1/3">r</div>
    </div>
 )
}

export default AdminPage;