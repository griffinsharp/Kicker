import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

class NoReward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backing_amount: this.props.reward.amount,
      user_id: this.props.user.id,
      reward_id: this.props.reward.id,
      project_id: this.props.project.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth"
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser === null) {
      this.props.history.push({
        pathname: "/login",
        state: {
          rerouted: "project",
          path: `${this.props.location.pathname}`,
          errors: "You must be signed in to back a project."
        }
      });
    } else {
      const backing = Object.assign({}, this.state);
      this.props.createBacking(backing).then(() => this.handleErrors());
    }
  }

  handleErrors() {
    if (this.props.errors.length === 0) {
      this.props.reward.num_backers = this.props.reward.num_backers + 1;
      this.props.project.num_backers = this.props.project.num_backers + 1;
      this.props.project.total_pledged =
        this.props.project.total_pledged + this.state.pledge_amount;
    }
    this.scrollToTop();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-number-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form className="pledge-form" onSubmit={this.handleSubmit}>
        <div className="no-reward-pledge">
          <div className="no-reward-header">Pledge without a reward</div>

          <div className="funding-box-rew">
            <div className="dollar-sign-rew">$</div>
            <input
              className="session-type-input-funding-rew"
              onChange={this.update("backing_amount")}
              value={this.state.backing_amount}
              type="number"
            ></input>
          </div>

          <input
            className="pledge-submit-button"
            type="submit"
            value="Back this project"
          />
        </div>
      </form>
    );
  }
}

export default withRouter(NoReward);
