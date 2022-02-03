import '../styles/common.css';

import { Component } from 'react';
import { UserInfoSection } from './UserInfo';
import { EducationSection } from './Education';
import { WorkExperienceSection } from './WorkExperience';
import { ProjectSection } from './Project';
import { renderIfTrue } from '../utils/helper-functions';

class Resume extends Component {
  render() {
    const { userInfo, educations, workExperiences, projects } = this.props;
    return (
      <div>
        <UserInfoSection userInfo={userInfo} />
        {renderIfTrue(
          educations.length !== 0,
          <EducationSection educations={educations} />
        )}
        {renderIfTrue(
          workExperiences.length !== 0,
          <WorkExperienceSection workExperiences={workExperiences} />
        )}
        {renderIfTrue(
          projects.length !== 0,
          <ProjectSection projects={projects} />
        )}
      </div>
    );
  }
}

export { Resume };
