import React from 'react'
import './ToDo.css'
function ToDo(props) {
    const get_items=props.Items;
    const  DeleteItemsFun=props.DeleteItemsFun;
    const length=get_items.length
    const use_items=length?(
        get_items.map(ele=>{
            return(<div key={ele.id} className={"content"}>
                  <span className='TaskSpan'>{ele.Task}</span>
                  <span className='TimeSpan'>{ele.TaskTime}</span>
                  <span className='DeleteSpan' onClick={()=>DeleteItemsFun(ele.id)}>&times;</span>
                    </div>)
        })
    ) : (<p className='pTask'> No tasks ! &#128079; </p>)
   
  return (
    <div className='showBox'>
        <div className='spanTitel'>
            <span className='spanTask'>Task</span>
            <span className='spanTime'>Time(h)</span>
            <span className='spanDelete'>Delete</span>
        </div>
        {use_items}
    </div>
  )
}

export default ToDo