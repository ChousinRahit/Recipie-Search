import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipieList from "./components/RecipieList";
import RecipieDetails from "./components/RecipieDetails";

export default class App extends Component {
  //key1 = 7cbe39edd58de420f4fc6917d171f38c
  //key2 = 4e8645890379c2695d932fa513d43c39
  //key3 = 801dccbbc0e4d43a32650b51bdd923d4
  state = {
    recipes: [],
    base_url:
      "https://www.food2fork.com/api/search?key=4e8645890379c2695d932fa513d43c39",
    url:
      "https://www.food2fork.com/api/search?key=4e8645890379c2695d932fa513d43c39",
    deatils_id: 35829,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      // console.log(jsonData);

      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: "sorry your search did not return any results" };
        });
      }
      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipieList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <RecipieDetails
            id={this.state.deatils_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      deatils_id: id
    });
  };

  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        console.log(this.state.search);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;

    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    // console.log(this.state.recipes);

    return (
      <div>
        <React.Fragment>
          {this.displayPage(this.state.pageIndex)}
        </React.Fragment>
      </div>
    );
  }
}
