import { Component } from 'react';
import { renderIfTrue } from '../utils/helper-functions';

function ProjectFactory(name, codeUrl, hostingUrl, techStack, description) {
  return { name, codeUrl, hostingUrl, techStack, description };
}

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
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
      </div>
    );
  }
}

export { ProjectFactory, ProjectItem };
