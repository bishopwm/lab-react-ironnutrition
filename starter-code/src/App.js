import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';

class App extends Component {

  state = {
    allFoods: [...foods],
    form: ""
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
                  <img style={{width: '6%'}} src={this.state.allFoods[i].image} alt=""/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{this.state.allFoods[i].name}</strong> <br />
                      <small>{this.state.allFoods[i].calories}</small>
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
      <form className="add-food-form">
        <input placeholder="Food Name" type="text"></input><br></br>
        <input placeholder="Food Calories" type="number"></input><br></br>
        <input placeholder="Food Image" type="url"></input>
        <input type="submit"></input><br></br>
      </form>
    )
    this.setState({
      form: emptyForm
    })
  }


  render() {
    console.log(this.state.foods)
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
