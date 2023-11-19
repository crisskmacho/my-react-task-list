import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export const BotonA = () => {
  return (
    <button>+</button>
  )
}

export const BotonB = () => {
    return (
      <button>Clear All</button>
    )
  }

 
export const BotonC = () => {
    return (
      <button><FaEdit/></button>
    )
}

export const BotonD = () => {
  return (
    <button><MdDelete/></button>
  )
}