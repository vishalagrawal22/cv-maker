import { Component } from 'react';
import { Section } from './Section';
import { renderIfTrue, conditionalRender } from '../utils/helper-functions';
import uniqid from 'uniqid';

function WorkExperienceFactory(
  company,
  position,
  description,
  start,
  end,
  id = uniqid('WorkExperience-')
) {
  return { company, position, description, start, end, id };
}

class WorkExperienceItem extends Component {
  render() {
    const { workExperience } = this.props;
    return (
      <li>
        <div>{workExperience.company}</div>
        <div>{workExperience.positon}</div>
        {renderIfTrue(
          workExperience.description !== '',
          <div>{workExperience.description}</div>
        )}
        <div>
          <span>
            {workExperience.start} -
            {conditionalRender(
              workExperience.end !== '',
              <span> {workExperience.end}</span>,
              <span> {'Present'}</span>
            )}
          </span>
        </div>
      </li>
    );
  }
}

class WorkExperienceSection extends Component {
  render() {
    const { workExperiences } = this.props;
    return (
      <Section header="Work Experience">
        {workExperiences.map((workExperience) => (
          <WorkExperienceItem
            key={workExperience.id}
            workExperience={workExperience}
          />
        ))}
      </Section>
    );
  }
}

export { WorkExperienceFactory, WorkExperienceItem, WorkExperienceSection };
