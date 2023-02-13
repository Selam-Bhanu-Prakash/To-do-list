import React, { Component } from 'react';
import Plan from './Plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  state = {
    items:[],
    text : ""
  }
  handleChange = e =>{
    this.setState({text:e.target.value})
  }

  handleClick = e =>{
    const items = [...this.state.items, this.state.text];
    this.setState({items:items, text:""});
  }

  handleDelete = id =>{
    const oldItems = [...this.state.items]
    const newItems = oldItems.filter((element,i)=> {
      return i!==id
    })
    this.setState({items:newItems});
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's Plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Enter your Plan here" value={this.state.text}
                onChange={this.handleChange} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold text-white" onClick={this.handleClick}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                      /*this.state.items.map((value, i)=> {
                        return <Plan key={i} value={value} id={i} sendData={this.handleDelete}/>
                      })*/
                      <ul className="list-unstyled row m-5">
                        <Plan p={this.state.items} sendData={this.handleDelete} />
                      </ul>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

