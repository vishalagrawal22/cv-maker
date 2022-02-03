import { Component } from 'react';
import { UserInfoFactory, InputUserInfoSection } from './components/UserInfo';
import { ProjectFactory, InputProjectsSection } from './components/Project';
import {
  EducationFactory,
  InputEducationSection,
} from './components/Education';
import {
  WorkExperienceFactory,
  InputWorkExperienceSection,
} from './components/WorkExperience';
import { Resume } from './components/Resume';
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

      educations: [],
      educationsFormValues: {
        editMode: true,
        educations: [],
      },

      workExperiences: [],
      workExperienceFormValues: {
        editMode: true,
        workExperiences: [],
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

    this.handleEducationStartEditMode =
      this.handleEducationStartEditMode.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.handleWorkExperienceEditMode =
      this.handleWorkExperienceEditMode.bind(this);
    this.handleWorkExperienceChange =
      this.handleWorkExperienceChange.bind(this);
    this.handleWorkExperienceSubmit =
      this.handleWorkExperienceSubmit.bind(this);
    this.handleWorkExperienceAdd = this.handleWorkExperienceAdd.bind(this);
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

  handleEducationStartEditMode() {
    this.setState((prevState) => {
      const educationsFormValues = deepCopy(prevState.educationsFormValues);
      educationsFormValues.editMode = true;
      return {
        educationsFormValues,
      };
    });
  }

  handleEducationSubmit() {
    this.setState((prevState) => {
      const educationsFormValues = deepCopy(prevState.educationsFormValues);
      educationsFormValues.editMode = false;

      const educations = deepCopy(prevState.educationsFormValues).educations;
      const index = educations.findIndex(
        (education) => education.institute === '' || education.degree === ''
      );
      if (index === -1) {
        return {
          educations,
          educationsFormValues,
        };
      } else {
        return null;
      }
    });
  }

  handleEducationChange(event) {
    const form = event.target.parentElement;
    const id = form.getAttribute('id');
    this.setState((prevState) => {
      const educationsFormValues = deepCopy(prevState.educationsFormValues);
      const educationIndex = educationsFormValues.educations.findIndex(
        (education) => id === education.id
      );
      educationsFormValues.educations[educationIndex][event.target.name] =
        event.target.value;
      return {
        educationsFormValues,
      };
    });
  }

  handleEducationAdd() {
    this.setState((prevState) => {
      const educationsFormValues = deepCopy(prevState.educationsFormValues);
      educationsFormValues.educations.push(
        EducationFactory('', '', '', '', '')
      );
      return {
        educationsFormValues,
      };
    });
  }

  handleWorkExperienceEditMode() {
    this.setState((prevState) => {
      const workExperienceFormValues = deepCopy(
        prevState.workExperienceFormValues
      );
      workExperienceFormValues.editMode = true;
      return {
        workExperienceFormValues,
      };
    });
  }

  handleWorkExperienceSubmit() {
    this.setState((prevState) => {
      const workExperienceFormValues = deepCopy(
        prevState.workExperienceFormValues
      );
      workExperienceFormValues.editMode = false;

      const workExperiences = deepCopy(
        prevState.workExperienceFormValues
      ).workExperiences;
      const index = workExperiences.findIndex(
        (workExperience) =>
          workExperience.company === '' || workExperience.position === ''
      );

      if (index === -1) {
        return {
          workExperiences,
          workExperienceFormValues,
        };
      } else {
        return null;
      }
    });
  }

  handleWorkExperienceChange(event) {
    const form = event.target.parentElement;
    const id = form.getAttribute('id');
    this.setState((prevState) => {
      const workExperienceFormValues = deepCopy(
        prevState.workExperienceFormValues
      );
      const workExperienceIndex =
        workExperienceFormValues.workExperiences.findIndex(
          (workExperience) => id === workExperience.id
        );

      workExperienceFormValues.workExperiences[workExperienceIndex][
        event.target.name
      ] = event.target.value;
      return {
        workExperienceFormValues,
      };
    });
  }

  handleWorkExperienceAdd() {
    this.setState((prevState) => {
      const workExperienceFormValues = deepCopy(
        prevState.workExperienceFormValues
      );
      workExperienceFormValues.workExperiences.push(
        WorkExperienceFactory('', '', '', '', '')
      );
      return {
        workExperienceFormValues,
      };
    });
  }

  render() {
    return (
      <div>
        <InputUserInfoSection
          userInfo={this.state.userInfo}
          userInfoFormValues={this.state.userInfoFormValues}
          onStartEditMode={this.handleUserInfoStartEditMode}
          onUserInfoSubmit={this.handleUserInfoSubmit}
          onUserInfoChange={this.handleUserInfoChange}
        />
        <InputEducationSection
          educations={this.state.educations}
          educationsFormValues={this.state.educationsFormValues}
          onStartEditMode={this.handleEducationStartEditMode}
          onEducationSubmit={this.handleEducationSubmit}
          onEducationChange={this.handleEducationChange}
          onEducationAdd={this.handleEducationAdd}
        />
        <InputWorkExperienceSection
          workExperiences={this.state.workExperiences}
          workExperienceFormValues={this.state.workExperienceFormValues}
          onStartEditMode={this.handleWorkExperienceEditMode}
          onWorkExperienceSubmit={this.handleWorkExperienceSubmit}
          onWorkExperienceChange={this.handleWorkExperienceChange}
          onWorkExperienceAdd={this.handleWorkExperienceAdd}
        />
        <InputProjectsSection
          projects={this.state.projects}
          projectsFormValues={this.state.projectsFormValues}
          onStartEditMode={this.handleProjectStartEditMode}
          onProjectsSubmit={this.handleProjectsSubmit}
          onProjectChange={this.handleProjectChange}
          onProjectAdd={this.handleProjectAdd}
        />
        <Resume
          projects={this.state.projects}
          educations={this.state.educations}
          workExperiences={this.state.workExperiences}
          userInfo={this.state.userInfo}
        />
      </div>
    );
  }
}

export default App;
