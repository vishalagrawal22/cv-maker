import '../styles/common.css';

import { Component } from 'react';
import { Section, InputListSection } from './Section';
import { renderIfTrue, conditionalRender } from '../utils/helper-functions';
import uniqid from 'uniqid';

function WorkExperienceFactory(
  company = '',
  position = '',
  description = '',
  start = '',
  end = '',
  id = uniqid('WorkExperience-')
) {
  return { company, position, description, start, end, id };
}

class WorkExperienceItem extends Component {
  render() {
    const { workExperience } = this.props;
    return (
      <li>
        <h4>{workExperience.company}</h4>
        <div>{workExperience.positon}</div>
        {renderIfTrue(
          workExperience.description !== '',
          <div>{workExperience.description}</div>
        )}
        <div>
          <span>
            {renderIfTrue(
              workExperience.start !== '',
              conditionalRender(
                workExperience.end !== '',
                <span>
                  {workExperience.start} - {workExperience.end}
                </span>,
                <span>
                  {workExperience.start} - {'Present'}
                </span>
              )
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
        <ul>
          {workExperiences.map((workExperience) => (
            <WorkExperienceItem
              key={workExperience.id}
              workExperience={workExperience}
            />
          ))}
        </ul>
      </Section>
    );
  }
}

function InputWorkExperienceItemForm(workExperience, onChange, onDelete) {
  return (
    <li key={workExperience.id}>
      <form id={workExperience.id}>
        <label htmlFor="company">Company:</label>
        <input
          id="company"
          name="company"
          value={workExperience.company}
          onChange={onChange}
          type="text"
          required
        />
        <label htmlFor="position">Position:</label>
        <input
          id="position"
          name="position"
          value={workExperience.position}
          onChange={onChange}
          type="text"
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={workExperience.description}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="work-experience-start">Start:</label>
        <input
          id="work-experience-start"
          name="start"
          value={workExperience.start}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="work-experience-end">End:</label>
        <input
          id="work-experience-end"
          name="end"
          value={workExperience.end}
          onChange={onChange}
          type="text"
        />
        <button onClick={onDelete}>delete</button>
      </form>
    </li>
  );
}

function InputWorkExperienceSectionForm(workExperiences, onChange, onDelete) {
  return (
    <ul>
      {workExperiences.map((workExperience) => {
        return InputWorkExperienceItemForm(workExperience, onChange, onDelete);
      })}
    </ul>
  );
}

function InputWorkExperienceItemDisplay(workExperience) {
  return (
    <li key={workExperience.id}>
      <div>Company: {workExperience.company}</div>
      <div>Position: {workExperience.position}</div>
      <div>Description: {workExperience.description}</div>
      <div>Start: {workExperience.start}</div>
      <div>End: {workExperience.end}</div>
    </li>
  );
}

function InputWorkExperienceSectionDisplay(workExperiences) {
  return (
    <ul>
      {workExperiences.map((workExperience) => {
        return InputWorkExperienceItemDisplay(workExperience);
      })}
    </ul>
  );
}

class InputWorkExperienceSection extends Component {
  render() {
    const {
      workExperiences,
      editMode,
      formList,
      onAdd,
      onDelete,
      onChange,
      onStartEditMode,
      onSubmit,
    } = this.props;
    return (
      <InputListSection
        header="Enter your work experience data"
        editMode={editMode}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        onAdd={onAdd}
        editDisplay={InputWorkExperienceSectionForm(
          formList,
          onChange,
          onDelete
        )}
        viewDisplay={InputWorkExperienceSectionDisplay(workExperiences)}
      />
    );
  }
}

export {
  WorkExperienceFactory,
  WorkExperienceItem,
  WorkExperienceSection,
  InputWorkExperienceSection,
};
