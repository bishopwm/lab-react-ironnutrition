import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';

class App extends Component {

  state = {
    allFoods: [...foods]
  }

  displayAllFoods = () => {
    let foodsList = [];
    for(let i=0; i<this.state.allFoods.length; i++){
      foodsList.push(
        <li key={i} className="food-list-item">
          <div>
            <img className="food-image"src={this.state.allFoods[i].image} alt=""></img><br></br>
            <strong>{this.state.allFoods[i].name}</strong><br></br>
            <strong>Cal: </strong>{this.state.allFoods[i].calories}<br></br>
            <strong>Quant: </strong>{this.state.allFoods[i].quantity}
          </div>
        </li>
      )}
    return <ul className = "foods-list">{foodsList}</ul>
  }


  render() {
    console.log(this.state.foods)
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <div>
        {this.displayAllFoods()}
        </div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
              <img style={{width: '6%'}} src="https://i.imgur.com/eTmWoAN.png" alt=""/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Pizza</strong> <br />
                  <small>400 cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value="1"
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
    );
  }
}

export default App;
