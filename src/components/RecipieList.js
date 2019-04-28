import React, { Component } from "react";
import Recipe from "./Recipe";
import Search from "./RecipieSearch";
import { recipe } from "../tempDetails";

export default class RecipieList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      handleSubmit,
      handleChange,
      value,
      error
    } = this.props;
    return (
      <div>
        <React.Fragment>
          <Search
            value={value}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <div className="container my-5">
            {/* title*/}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                <h1 className="text-slanted">recipe list</h1>
              </div>
            </div>
            {/* end of title*/}

            <div className="row">
              {error ? (
                <h1 className="text-danger text-capitalize mx-auto">{error}</h1>
              ) : (
                recipes.map(recipe => {
                  return (
                    <Recipe
                      key={recipe.recipe_id}
                      recipe={recipe}
                      handleDetails={handleDetails}
                    />
                  );
                })
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
