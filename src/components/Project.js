import uniqid from 'uniqid';

import '../styles/common.css';
import '../styles/Project.css';

import { Component } from 'react';
import { renderIfTrue } from '../utils/helper-functions';
import { InputListSection, Section } from './Section';

function ProjectFactory(
  name = '',
  codeUrl = '',
  hostingUrl = '',
  techStack = '',
  description = '',
  id = uniqid('Project-')
) {
  return { id, name, codeUrl, hostingUrl, techStack, description };
}

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <li>
        <h4>{project.name}</h4>
        {renderIfTrue(
          project.codeUrl !== '' || project.hostingUrl !== '',
          <div className="action-links">
            {renderIfTrue(
              project.codeUrl !== '',
              <a href={project.codeUrl} rel="noreferrer" target="_blank">
                View Code
              </a>
            )}
            {renderIfTrue(
              project.hostingUrl !== '',
              <a href={project.hostingUrl} rel="noreferrer" target="_blank">
                Live Preview
              </a>
            )}
          </div>
        )}
        {renderIfTrue(
          project.description !== '',
          <div>{project.description}</div>
        )}
        {renderIfTrue(
          project.techStack.length !== 0,
          <div>
            Tech Stack:
            <ul>
              {project.techStack.split(',').map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  }
}

class ProjectSection extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Section header="Projects">
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </Section>
    );
  }
}

function InputProjectItemForm(project, onChange, onDelete) {
  return (
    <li key={project.id}>
      <form id={project.id}>
        <label htmlFor="project-name">Name:</label>
        <input
          id="project-name"
          name="name"
          value={project.name}
          onChange={onChange}
          type="text"
          required
        />
        <label htmlFor="code-url">Code Url:</label>
        <input
          id="code-url"
          name="codeUrl"
          value={project.codeUrl}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="hosting-url">Hosting Url:</label>
        <input
          id="hosting-url"
          name="hostingUrl"
          value={project.hostingUrl}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="tech-stack">
          Tech Stack (seperate different tech by comma):
        </label>
        <input
          id="tech-stack"
          name="techStack"
          value={project.techStack}
          onChange={onChange}
          type="text"
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={project.description}
          onChange={onChange}
          type="text"
        />
        <button onClick={onDelete}>delete</button>
      </form>
    </li>
  );
}

function InputProjectsSectionForm(projects, onChange, onDelete) {
  return (
    <ul>
      {projects.map((project) => {
        return InputProjectItemForm(project, onChange, onDelete);
      })}
    </ul>
  );
}

function InputProjectItemDisplay(project) {
  return (
    <li key={project.id}>
      <div>Name: {project.name}</div>
      <div>Code Url: {project.codeUrl}</div>
      <div>Hosting Url: {project.hostingUrl}</div>
      <div>Tech Stack: {project.techStack}</div>
      <div>Description: {project.description}</div>
    </li>
  );
}

function InputProjectsSectionDisplay(projects) {
  return (
    <ul>
      {projects.map((project) => {
        return InputProjectItemDisplay(project);
      })}
    </ul>
  );
}

class InputProjectsSection extends Component {
  render() {
    const {
      projects,
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
        header="Enter your projects data"
        editMode={editMode}
        onStartEditMode={onStartEditMode}
        onSubmit={onSubmit}
        onAdd={onAdd}
        onDelete={onDelete}
        editDisplay={InputProjectsSectionForm(formList, onChange, onDelete)}
        viewDisplay={InputProjectsSectionDisplay(projects)}
      />
    );
  }
}

export { ProjectFactory, ProjectItem, ProjectSection, InputProjectsSection };
