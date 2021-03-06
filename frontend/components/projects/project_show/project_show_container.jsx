import { connect } from "react-redux";
import ProjectShow from "./project_show";
import { fetchProject, createBacking } from "../../../actions/project_actions";

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  user: Object.values(state.entities.users),
  rewards: Object.values(state.entities.rewards),
  errors: state.errors.projects,
  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
