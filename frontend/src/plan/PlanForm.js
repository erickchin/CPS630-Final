import React, { Component } from "react";
import "./plan.css";

class PlanForm extends Component {
  state = {
    month: "January",
    transportBudget: "",
    groceriesBudget: "",
    shoppingBudget: "",
    restaurantBudget: "",
    coffeeBudget: "",
    income: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      month: "January",
      transportBudget: "",
      groceriesBudget: "",
      shoppingBudget: "",
      restaurantBudget: "",
      coffeeBudget: "",
      income: ""
    });
  };

  render() {
    return (
      <form>
        <div class="row">
          <div class="col-md-6">
            <h5>Select the month you would like to plan for.</h5>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-10">
            <select
              id="month"
              name="month"
              value={this.state.month}
              defaultValue={this.state.selectValue}
              onChange={e => this.change(e)}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="transportBudget" class="col-sm-2 col-form-label">
            Transportation
          </label>
          <div class="col-sm-10">
            <input
              id="transportBudget"
              type="form-control"
              name="transportBudget"
              placeholder="100"
              value={this.state.transportBudget}
              onChange={e => this.change(e)}
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="coffeeBudget" class="col-sm-2 col-form-label">
            Coffee
          </label>
          <div class="col-sm-10">
            <input
              id="coffeBudget"
              type="form-control"
              name="coffeeBudget"
              placeholder="64"
              value={this.state.coffeeBudget}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="groceriesBudget" class="col-sm-2 col-form-label">
            Grocery
          </label>
          <div class="col-sm-10">
            <input
              id="groceriesBudget"
              type="form-control"
              name="groceriesBudget"
              placeholder="196"
              value={this.state.groceriesBudget}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="shoppingBudget" class="col-sm-2 col-form-label">
            Shopping
          </label>
          <div class="col-sm-10">
            <input
              id="shoppingBudget"
              type="form-control"
              name="shoppingBudget"
              placeholder="225"
              value={this.state.shoppingBudget}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="restaurantBudget" class="col-sm-2 col-form-label">
            Restaurant
          </label>
          <div class="col-sm-10">
            <input
              id="restaurantBudget"
              type="form-control"
              name="restaurantBudget"
              placeholder="144"
              value={this.state.restaurantBudget}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="income" class="col-sm-2 col-form-label">
            Monthly Income
          </label>
          <div class="col-sm-10">
            <input
              id="income"
              type="form-control"
              name="income"
              placeholder="5000"
              value={this.state.income}
              onChange={e => this.change(e)}
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button
              type="button"
              className="btn btn-primary"
              onClick={e => this.onSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default PlanForm;
