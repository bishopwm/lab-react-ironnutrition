import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    allFoods: [...foods],
    form: "",
    newFoodName: "",
    newFoodCal: 0,
    newFoodImg: ""
  }

  handleChangeName = (e) => {
    console.log("handling name change!" + e.target.value)
    this.setState({
      newFoodName: e.target.value
    })
  }

  handleChangeCal = (e) => {
    console.log("handling cal change!" + e.target.value)
    this.setState({
      newFoodCal: e.target.value
    })
  }

  handleChangeImg = (e) => {
    console.log("handling img change!" + e.target.value)
    this.setState({
      newFoodImg: e.target.value
    })
  }

  addFood = (e) => {
    e.preventDefault();
    let newFood = {
      name: this.state.newFoodName,
      calories: this.state.newFoodCal,
      image: this.state.newFoodImg,
      quantity: 1
    };
    let allFoodsCopy = [...this.state.allFoods];
    allFoodsCopy.push(newFood)
    this.setState({
      allFoods: allFoodsCopy,
      form: ""
    })
  }

  displayAllFoods = () => {
    let foodsList = [];
    for(let i=0; i<this.state.allFoods.length; i++){
      foodsList.push(
        <li key={i} className="food-list-item">
          <div>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                  <img style={{width: '80%'}} src={this.state.allFoods[i].image} alt=""/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{this.state.allFoods[i].name}</strong> <br />
                      <small>{this.state.allFoods[i].calories} cal</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="number" 
                        value={this.state.allFoods[i].quantity}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </li>
      )}
    return <ul className = "foods-list">{foodsList}</ul>
  }

  displayAddFoodForm = () => {
    console.log("displaying form!")
    let emptyForm = [];
    emptyForm.push(
      <form onSubmit={this.addFood} key={0} className="add-food-form">
        <input onChange={this.handleChangeName} placeholder="Food Name" type="text"></input><br></br>
        <input onChange={this.handleChangeCal} placeholder="Food Calories" type="number"></input><br></br>
        <input onChange={this.handleChangeImg} placeholder="Food Image" type="url"></input>
        <input type="submit"></input><br></br>
      </form>
    )
    this.setState({
      form: emptyForm
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        {this.state.form}
        <button onClick={this.displayAddFoodForm}>Add Food</button>
        <div>
        {this.displayAllFoods()}
      </div>
      </div>
    );
  }
}

export default App;
