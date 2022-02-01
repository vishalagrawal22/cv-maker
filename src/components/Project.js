import { Component } from 'react';
import { renderIfTrue } from '../utils/helper-functions';
import { Section } from './Section';
import uniqid from 'uniqid';

function ProjectFactory(
  name,
  codeUrl,
  hostingUrl,
  techStack,
  description,
  id = uniqid('Project-')
) {
  return { id, name, codeUrl, hostingUrl, techStack, description };
}

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <li>
        {renderIfTrue(
          project.name !== '',
          <div>Project Name: {project.name}</div>
        )}
        {renderIfTrue(
          project.codeUrl !== '' || project.hostingUrl !== '',
          <div className="action-links">
            {renderIfTrue(
              project.codeUrl !== '',
              <div>
                <a href={project.codeUrl} rel="noreferrer" target="_blank">
                  View Code
                </a>
              </div>
            )}
            {renderIfTrue(
              project.hostingUrl !== '',
              <div>
                <a href={project.hostingUrl} rel="noreferrer" target="_blank">
                  Live Preview
                </a>
              </div>
            )}
          </div>
        )}
        {renderIfTrue(
          project.techStack.length !== 0,
          <div>
            Tech Stack:
            <ul>
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {renderIfTrue(
          project.description !== '',
          <div>Description: {project.description}</div>
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
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Section>
    );
  }
}

export { ProjectFactory, ProjectItem, ProjectSection };
