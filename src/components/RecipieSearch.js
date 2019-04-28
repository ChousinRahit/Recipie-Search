import React, { Component } from "react";

export default class RecipieSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with
                <strong className="text-danger"> food2Fork</strong>
              </h1>
              <form className="mt-4 mx-auto" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group text-center">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="indian,dosa,carrots"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
