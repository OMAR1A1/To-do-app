import React ,{Component} from 'react'
import './App.css';
import ToDo from './component/todo/toDo'
import AddItem from './component/add/add'
class App extends Component {
  state={
    items:[]
  }
  DeleteItemsFun=(id)=>{
    let GetContentState = this.state.items;
let TrafficVariable= GetContentState.filter(TrafficVariable =>{
  return TrafficVariable.id !== id
})
this.setState({
  items:TrafficVariable
})
/* other way 
let TrafficVariable= GetContentState.findIndex(GetContentState =>GetContentState.id === id
)
GetContentState.splice(TrafficVariable,1)
this.setState({
  items:GetContentState
})
*/
  }
  AddItem=(stateFromAddItem)=>{
    stateFromAddItem.id=Math.random()
 let stateApp=this.state.items
 stateApp.push(stateFromAddItem)
 this.setState({
  items:stateApp
 })
  }
  render(){
  return (
    <div className="App container">
     <p>Todo App</p> 
     <ToDo Items={this.state.items}  DeleteItemsFun={this.DeleteItemsFun} />
     <AddItem AddItem={this.AddItem}/>
    </div>
    
  );
}
}
export default App;
