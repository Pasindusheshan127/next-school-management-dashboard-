
import errorsToRecord from '@hookform/resolvers/io-ts/dist/errorsToRecord.js'
import React from 'react'
import { FieldError } from 'react-hook-form'

type InputFieldProps = {
    lable: string,
    type?: string,
    register: any,
    name: string,
    defaultValue?: string,
    error?: FieldError,
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>,
  
}

const InputField = (
    {lable, type = "text", register, name, defaultValue, error, inputProps}:InputFieldProps) =>{

  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gary-500">{lable}</label>
          <input 
          type="text" {...register(name)} 
          className="ring-[1.5] ring-gray-300 p-2 rounded-md text-sm border border-black w-full" 
          {...inputProps}
          defaultValue={defaultValue}
          />
          {error?.message && <p className="text-xs text-red-400">{error?.message.toString()}</p>}
      </div>
  )
}

export default InputField