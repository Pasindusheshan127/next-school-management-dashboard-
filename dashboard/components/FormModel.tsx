"use client"

import Image from "next/image";

const FormModel = ({table,type,data,id}:{
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const color = type === "create" ? "bg-systemYellow" : type === "update" ? "bg-sky-200" : "bg-purple-200"

  return (
    <div>
      <button className={`${size} flex items-center justify-center rounded-full ${color}`}>
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
    </div>
  )
}

export default FormModel