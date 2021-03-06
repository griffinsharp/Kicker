import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Route, Redirect, withRouter } from "react-router-dom";

class CatReccProjIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.percentFunded = this.percentFunded.bind(this);
  }

  percentFunded(pledged, total) {
    return Math.floor((pledged / total) * 100);
  }

  render() {
    const { projectId, project } = this.props;

    return (
      <div className="recc-project-index-item">
        <div className="author">
          <div className="recc-pic-and-body">
            <Link to={`/projects/${projectId}`}>
              <img
                className="recc-project-index-item-pic"
                src={project.photoURL}
                alt=""
              />
              <div className="recc-contents">
                <p className="recc-project-title">{project.title}</p>
                <p className="funded-amount">
                  {this.percentFunded(
                    project.newPledgeAmount,
                    project.goal_amount
                  )}
                  % funded
                </p>
                <p className="author-name">
                  By&nbsp;
                  <p className="proj-name-underline">{project.authorName}</p>
                </p>
              </div>
            </Link>
            <div className="heart-container">
              <FontAwesomeIcon className="heart" icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CatReccProjIndexItem);
