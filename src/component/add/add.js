import React, { Component } from 'react'
import './add.css'
class AddItem extends Component {
state={
    Task:"",
    TaskTime:""
}
handelChange=(e)=>{
 this.setState({
    [e.target.id]:e.target.value
 })
}
handelSubmit=(e)=>{
    e.preventDefault()
   
    if (e.target.Task.value==="" || e.target.TaskTime.value==="" ){
      return false
    }else{
        this.props.AddItem(this.state)
        this.setState({
        Task:"",
        TaskTime:""
     })}
}
render(){
  return (
    <div >
       <form onSubmit={this.handelSubmit} className='FormAdd'>  
            <input type="text" className='' id="Task" placeholder="Enter your task..." onChange={this.handelChange} value={this.state.Task}/>
            <input type="number"  id="TaskTime" className='' placeholder="Enter time..."  onChange={this.handelChange}value={this.state.TaskTime}/>
            <input type="submit" value="add"/>
       </form>
    </div>
  )
}}

export default AddItem
/*

import React from 'react'
import './ToDo.css'
function ToDo(props) {
    const get_items=props.Items;
    const  DeleteItemsFun=props.DeleteItemsFun;
    const length=get_items.length
    const use_items=length?(
        get_items.map(ele=>{
            return(<div key={ele.id}>
                  <span>{ele.Task}</span>
                  <span>{ele.TaskTime}</span>
                  <span onClick={()=>DeleteItemsFun(ele.id)}>&times;</span>
                    </div>)
        })
    ) : (<p> No tasks ! &#128079; </p>)
   
  return (
    <div className='showBox'>
        <div>
            <span>Task</span>
            <span>Time(h)</span>
        </div>
        {use_items}
    </div>
  )
}

export default ToDo


*/