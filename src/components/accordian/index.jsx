//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import './styles.css'

function Accordian() {
    const [selected,setSelected]=useState(null);
    const [enableMultiSelection,setMultiSelection]=useState(false);
    const [multiple,setMultiple]=useState([]);
    function handleSelection(id){   
        selected === id ? setSelected(null) : setSelected(id);   
    }
    // console.log(selected);
    function handleMultiple(id){
        let cpyMultiple=[...multiple];
        const findIndex=cpyMultiple.indexOf(id);
        if(findIndex===-1) cpyMultiple.push(id);
        else cpyMultiple.splice(findIndex,1);
        setMultiple(cpyMultiple);
    }
    // console.log(selected,multiple);

  return (
    <div className="wrapper">
        <div>
        <button onClick={()=>setMultiSelection(!enableMultiSelection)} style={{marginRight:"20px"}}>{enableMultiSelection? "Disable MultiSelection":"Enable MultiSelection"}</button>
        </div>
      <div className="accordian">
        {
            data && data.length>0 ? 
            data.map(item=> (
                <div className="item" key={item.id}>
                    <div className="title">
                        <h3>{item.question}</h3>
                        <span onClick={enableMultiSelection?()=>handleMultiple(item.id) :()=>handleSelection(item.id)} style={{fontSize:"50px",marginLeft:"20px"}}>{selected===item.id || multiple.indexOf(item.id)!==-1?'-':'+'}</span>
                    </div>
                    {
                        enableMultiSelection ?
                        multiple.indexOf(item.id)!==-1 &&
                        <div className="content">{item.answer}</div>:
                        selected===item.id &&
                        <div className="content">{item.answer}</div>
                    }
                </div>
            )) 
            : <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordian;
