import React from 'react'

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todo:"",list:[]
        }
    }
    Handler=(e)=>{
        // e.preventDefualt();
        // console.log(e.target.value)
        this.setState({todo:e.target.value})
    }

    submitHandler=(event)=>{
        event.preventDefault();
        this.setState((a)=>{
           console.log(a)
           return{
              list:[...a.list,a.todo],
              todo:""
           }
           
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.submitHandler}>
                <input type='text' name='todo' id='1' onChange={this.Handler} value={this.state.todo}/>
                <input type='submit'/>
            </form>
            <h1>{this.state.list}</h1>
            </div>
        )
    }
}
export default Todo