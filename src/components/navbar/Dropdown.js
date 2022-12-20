import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { AboutDropDown } from './NavItems';
import "./Dropdown.css"

const Dropdown = () => {
    const [dropdown,setDropdown]=useState(false);
    return <>
        <ul className= {dropdown?"dropdown_menu  about clicked":"dropdown_menu about"} onClick={()=>setDropdown(!dropdown)}>
        {
					AboutDropDown.map((item)=>{
						return(
							<li key={item.id} >
                             <Link to={item.path}
                             className={item.cName}
                             onClick={()=>setDropdown(!dropdown)}
                             >{item.title}<i data-feather="chevron-down"></i></Link>   
							</li>
						)
					})
				  } 
        </ul>

    </>;
}



export default Dropdown;