import React, { useState } from 'react'
import {IoIosArrowDropdownCircle } from "react-icons/io";
import './style.css'

const Dropdown = ({selected,setSelected}) => {
    const [isActive,setIsActive]=useState(false);
    const list = ['Yes' , 'Proably Not'];
    const [value, setValue] = useState('')

    //we created this function to display selected value 
    const onClickHandler = (e)=>{
        setValue(e.target.textContent);
        setIsActive(false)
    }

  return (

    <div className='dropdown'>
    <h1>Should You use a Dropdown ?</h1>&nbsp;
      <h3 className='answer'> {value}</h3>&nbsp;
        <div className='dropdown-btn' onClick={(e)=> setIsActive(!isActive)}>Select One
        <IoIosArrowDropdownCircle  />
        </div>
      {isActive &&(
          <div className='drop-content'>
          //listing over the data in list throug map
                {list.map((option) => 
                (    <div onClick={(e) => {setSelected(option)
                setIsActive(false)
                {onClickHandler(e)}}}
             className='drop-item'>
             {option}
            </div>
                )) }
          
            
           
        </div>) }
        </div>
  )
}

export default Dropdown