import { Component } from 'react';
import { UserInfoFactory } from './components/UserInfo';
import {
  InputProjectsSection,
  ProjectFactory,
  ProjectSection,
} from './components/Project';
import { deepCopy } from './utils/helper-functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: UserInfoFactory('', '', ''),
      userInfoFormValues: { ...UserInfoFactory('', '', ''), editMode: true },
      projects: [],
      projectsFormValues: {
        editMode: true,
        projects: [],
      },
    };
    this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
    this.handleUserInfoSubmit = this.handleUserInfoSubmit.bind(this);
    this.handleUserInfoStartEditMode =
      this.handleUserInfoStartEditMode.bind(this);
    this.handleProjectStartEditMode =
      this.handleProjectStartEditMode.bind(this);
    this.handleProjectsSubmit = this.handleProjectsSubmit.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleProjectAdd = this.handleProjectAdd.bind(this);
  }

  handleUserInfoStartEditMode() {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfo);
      userInfoFormValues.editMode = true;
      return {
        userInfoFormValues,
      };
    });
  }

  handleUserInfoChange(event) {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfoFormValues);
      userInfoFormValues[event.target.id] = event.target.value;
      return {
        userInfoFormValues,
      };
    });
  }

  handleUserInfoSubmit() {
    this.setState((prevState) => {
      const userInfoFormValues = deepCopy(prevState.userInfoFormValues);
      delete userInfoFormValues.editMode;
      return {
        userInfo: userInfoFormValues,
        userInfoFormValues: { ...UserInfoFactory('', '', ''), editMode: false },
      };
    });
  }

  handleProjectStartEditMode() {
    this.setState((prevState) => {
      const projectsFormValues = deepCopy(prevState.projectsFormValues);
      projectsFormValues.editMode = true;
      return {
        projectsFormValues,
      };
    });
  }

  handleProjectsSubmit() {
    this.setState((prevState) => {
      const projectsFormValues = deepCopy(prevState.projectsFormValues);
      projectsFormValues.editMode = false;

      const projects = deepCopy(prevState.projectsFormValues).projects;
      const index = projects.findIndex((project) => project.name === '');
      if (index === -1) {
        return {
          projects,
          projectsFormValues,
        };
      } else {
        return null;
      }
    });
  }

  handleProjectChange(event) {
    const form = event.target.parentElement;
    const id = form.getAttribute('id');
    console.log(id);
    this.setState((prevState) => {
      const projectsFormValues = deepCopy(prevState.projectsFormValues);
      const projectIndex = projectsFormValues.projects.findIndex(
        (project) => id === project.id
      );
      projectsFormValues.projects[projectIndex][event.target.name] =
        event.target.value;
      return {
        projectsFormValues,
      };
    });
  }

  handleProjectAdd() {
    this.setState((prevState) => {
      const projectsFormValues = deepCopy(prevState.projectsFormValues);
      projectsFormValues.projects.push(ProjectFactory('', '', '', '', ''));
      return {
        projectsFormValues,
      };
    });
  }

  render() {
    return (
      <div>
        <InputProjectsSection
          projects={this.state.projects}
          projectsFormValues={this.state.projectsFormValues}
          onStartEditMode={this.handleProjectStartEditMode}
          onProjectsSubmit={this.handleProjectsSubmit}
          onProjectChange={this.handleProjectChange}
          onProjectAdd={this.handleProjectAdd}
        />
        <ProjectSection projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
