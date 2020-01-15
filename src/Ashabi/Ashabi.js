import React from 'react';
import './Ashabi.css';

const ashabi= (props) => {
	return (
		<div className="Ashabi"> 
		   <p onClick={props.click}> I am {props.name} and I am {props.age} years old </p>
		   <h2>{props.children}</h2>
		   <input type="text" 
		   onChange={props.changed} 
		   value={props.currentName} />
		</div>		    
    )
}; 

export default ashabi;
