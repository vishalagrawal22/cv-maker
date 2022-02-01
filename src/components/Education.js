import { Component } from 'react';
import { Section } from './Section';
import { renderIfTrue } from '../utils/helper-functions';
import uniqid from 'uniqid';

function EducationFactory(
  institute,
  degree,
  marks,
  start,
  end,
  id = uniqid('Education-')
) {
  return { institute, degree, marks, start, end, id };
}

class EducationItem extends Component {
  render() {
    const { education } = this.props;
    return (
      <li>
        <div>{education.institute}</div>
        <div>
          <div>
            {education.degree}
            {renderIfTrue(
              education.marks !== '',
              <span> - {education.marks}</span>
            )}
          </div>
        </div>
        <div>
          {renderIfTrue(
            education.start !== '',
            <span>{education.start} - </span>
          )}
          {renderIfTrue(education.end !== '', <span>{education.end}</span>)}
          {renderIfTrue(
            education.end === '' && education.start !== '',
            <span>{'Present'}</span>
          )}
        </div>
      </li>
    );
  }
}

class EducationSection extends Component {
  render() {
    const { educations } = this.props;
    return (
      <Section header="Education">
        {educations.map((education) => (
          <EducationItem key={education.id} education={education} />
        ))}
      </Section>
    );
  }
}

export { EducationFactory, EducationItem, EducationSection };
