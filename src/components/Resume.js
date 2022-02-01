import '../styles/common.css';

import { Component } from 'react';
import { UserInfoSection } from './UserInfo';
import { EducationSection } from './Education';
import { WorkExperienceSection } from './WorkExperience';
import { ProjectSection } from './Project';

class Resume extends Component {
  render() {
    const { userInfo, educations, workExperiences, projects } = this.props;
    return (
      <div>
        <UserInfoSection userInfo={userInfo} />
        <EducationSection educations={educations} />
        <WorkExperienceSection workExperiences={workExperiences} />
        <ProjectSection projects={projects} />
      </div>
    );
  }
}

export { Resume };
