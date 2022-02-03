import uniqid from 'uniqid';

import '../styles/common.css';

import { Component } from 'react';
import { Section, InputListSection } from './Section';
import { renderIfTrue, conditionalRender } from '../utils/helper-functions';

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
        <h4>{education.institute}</h4>
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
            <span>
              {education.start} -
              {conditionalRender(
                education.end !== '',
                <span> {education.end}</span>,
                <span> {'Present'}</span>
              )}
            </span>
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
        <ul>
          {educations.map((education) => (
            <EducationItem key={education.id} education={education} />
          ))}
        </ul>
      </Section>
    );
  }
}

function InputEducationItemForm(education, onEducationChange) {
  return (
    <li key={education.id}>
      <form id={education.id}>
        <label htmlFor="institute">Institute:</label>
        <input
          id="institute"
          name="institute"
          value={education.institute}
          onChange={onEducationChange}
          type="text"
          required
        />
        <label htmlFor="degree">Degree:</label>
        <input
          id="degree"
          name="degree"
          value={education.degree}
          onChange={onEducationChange}
          type="text"
        />
        <label htmlFor="marks">Marks:</label>
        <input
          id="marks"
          name="marks"
          value={education.marks}
          onChange={onEducationChange}
          type="text"
        />
        <label htmlFor="education-start">Start:</label>
        <input
          id="education-start"
          name="start"
          value={education.start}
          onChange={onEducationChange}
          type="text"
        />
        <label htmlFor="education-end">End:</label>
        <input
          id="education-end"
          name="end"
          value={education.end}
          onChange={onEducationChange}
          type="text"
        />
      </form>
    </li>
  );
}

function InputEducationSectionForm(educationsFormValues, onEducationChange) {
  return (
    <ul>
      {educationsFormValues.educations.map((education) => {
        return InputEducationItemForm(education, onEducationChange);
      })}
    </ul>
  );
}

function InputEducationItemDisplay(education) {
  return (
    <li key={education.id}>
      <div>Institute:{education.institute}</div>
      <div>Degree:{education.degree}</div>
      <div>Marks:{education.marks}</div>
      <div>Start:{education.start}</div>
      <div>End:{education.end}</div>
    </li>
  );
}

function InputEducationSectionDisplay(educations) {
  return (
    <ul>
      {educations.map((education) => {
        return InputEducationItemDisplay(education);
      })}
    </ul>
  );
}

class InputEducationSection extends Component {
  render() {
    const {
      educations,
      educationsFormValues,
      onStartEditMode,
      onEducationSubmit,
      onEducationChange,
      onEducationAdd,
    } = this.props;
    return (
      <InputListSection
        header="Enter your education data"
        editMode={educationsFormValues.editMode}
        onStartEditMode={onStartEditMode}
        onSubmit={onEducationSubmit}
        onAddItem={onEducationAdd}
        editDisplay={InputEducationSectionForm(
          educationsFormValues,
          onEducationChange
        )}
        viewDisplay={InputEducationSectionDisplay(educations)}
      />
    );
  }
}

export {
  EducationFactory,
  EducationItem,
  EducationSection,
  InputEducationSection,
};
