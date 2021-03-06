import React from "react";
import ProjectIndexContainer from "../projects/project_index_container";
import CategoryBar from "../categorybar/categorybar";
import ReccomendedProjectIndexContainer from "../projects/reccomended_project_index_container";
import FeaturedProjectContainer from "../projects/featured_project_container";
import FeaturedPic from "../../../app/assets/images/featured.jpg";
import CtaPic from "../../../app/assets/images/retro.png";
import { Link, withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      currentUser: this.props.currentUser
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // Fake email form
  handleSubmit(e) {
    e.preventDefault();
      this.setState({ email: "No e-mail server quite yet." });
      setTimeout( () => this.setState({ email: "No email server quite yet.." }), 500);
      setTimeout( () => this.setState({ email: "No email server quite yet..." }), 1000);
      setTimeout( () => this.setState({ email: "No email server quite yet...." }), 1500);
      setTimeout( () => this.setState({ email: "No email server quite yet....." }), 2000);
      setTimeout( () => this.setState({ email: "" }), 3000);
  }

  render() {
    let notLogged;
    let reDirect;
    if (this.props.currentUser == null) {
      notLogged = "/login";
      reDirect = "true";
    } else {
      notLogged = "/projects/new";
      reDirect = "false";
    }

    return (
      <div className="home-container">
        <div className="category-bar-container">
          <div className="category-bar">
            <CategoryBar />
          </div>
        </div>
        <div className="mid-section-container">
          <div className="mid-section">
            <div className="featured-project-container">
              <div className="featured-project">
                <p className="small-header">FEATURED PROJECT</p>
                <img className="featured-pic" src={FeaturedPic} />
                <Link to="/projects/8" className="mid-header">
                  Can I Kick It?
                </Link>
                <p className="mid-paragraph">
                  Yes, you can. Introducing, Kick It. The newest app for buying,
                  selling, and trading your favorite sneakers all from your
                  smartphone.
                </p>
                <p className="author">
                  By&nbsp;<Link to="/projects/8"> Kick It</Link>
                </p>
              </div>
            </div>
            <div className="reccomended-project-container">
              <p className="small-header-recc">RECOMMENDED</p>
              <ReccomendedProjectIndexContainer />
            </div>
          </div>
        </div>
        <div className="newsletter-banner-container">
          <div className="newsletter-banner">
            <p className="mid-header">
              Discover the best and brightest projects on Kicker.
            </p>
            <p className="mid-paragraph">
              This won't actually email you, it's just a cool form. Give it a shot.
            </p>
            <form onSubmit={this.handleSubmit}>
              <div className="newsletter-inputs">
                <input
                  onChange={this.update("email")}
                  className="session-type-input"
                  type="text"
                  placeholder="No e-mail service, for now."
                  value={this.state.email}
                />
                <input
                  className="session-type-button"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="call-to-action-container">
          <div className="cta">
            <img className="cta-pic" src={CtaPic} alt="" />
            <div className="cta-text">
              <div className="cta-text-top">
                <Link
                  to={{
                    pathname: notLogged,
                    state: {
                      rerouted: "navbar",
                      errors: "You must be signed in to create a project."
                    }
                  }}
                  className="cta-header"
                >
                  Make what matters to you, on your own terms.
                </Link>
                <div className="cta-body">
                  Launch a project to test a new idea and connect with a
                  community that wants to see it succeed. See how it works.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-index-container">
          <ProjectIndexContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
