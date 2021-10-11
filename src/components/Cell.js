import React from 'react';
export const Cell=(props)=>{

const onChange=(e)=>{
   if(props.onChange)
props.onChange(e.target.value,props.rowIndex,props.columnIndex)
    
}

    return (
                <td key={props.columnIndex} className={props.editable?"editable_input_cell":"input_cell"}> 
                {props.editable? <input onChange={onChange} className="editable_input" defaultValue={props.data}/>:props.data}
                </td>
    )
}

