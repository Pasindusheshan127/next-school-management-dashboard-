import UserCard from "@/app/components/UserCard";
import React from "react";
const AdminPage = () => {
    return (
    <div className="p-4 flex gap-4 flex-col md:flex-row"> 
    {/*left*/}
      <div className="w-full lg:w-2/3">
      {/* user card */}
       <div className="flex gap-4 justify-between flex-wrap">
         <UserCard type="students"/>
         <UserCard type="teachers"/>
         <UserCard type="parents"/>
         <UserCard type="staf"/>
       </div>
      </div>
    {/*right*/}
      <div className="w-full lfg:1/3">r</div>
    </div>
 )
}

export default AdminPage;