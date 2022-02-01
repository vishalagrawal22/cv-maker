import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectFactory, ProjectItem } from '../components/Project';

describe('Project Factory tests', () => {
  test('getters work', () => {
    const project = ProjectFactory(
      'Covid Statistics',
      'https://github.com/vishalagrawal22/covid-statistics',
      'https://vishalagrawal22.github.io/covid-statistics/',
      ['Javascript(Jquery)', 'Covid statistics and reverse geocoding APIs'],
      'A simple website which shows covid statistics of the world, user’s location or any specific state of any country.'
    );

    expect(project.name).toBe('Covid Statistics');

    expect(project.codeUrl).toBe(
      'https://github.com/vishalagrawal22/covid-statistics'
    );

    expect(project.hostingUrl).toBe(
      'https://vishalagrawal22.github.io/covid-statistics/'
    );

    expect(project.techStack).toEqual(
      expect.arrayContaining([
        'Javascript(Jquery)',
        'Covid statistics and reverse geocoding APIs',
      ])
    );

    expect(project.description).toBe(
      'A simple website which shows covid statistics of the world, user’s location or any specific state of any country.'
    );
  });
});

describe('ProjectItem component test', () => {
  test('If provided with everything renders all', () => {
    const project = ProjectFactory(
      'Covid Statistics',
      'https://github.com/vishalagrawal22/covid-statistics',
      'https://vishalagrawal22.github.io/covid-statistics/',
      ['Javascript(Jquery)', 'Covid statistics and reverse geocoding APIs'],
      'A simple website which shows covid statistics of the world, user’s location or any specific state of any country.'
    );
    render(<ProjectItem project={project} />);

    const projectName = screen.getByText(/project name/i);
    const projectCodeUrl = screen.getByText(/view code/i);
    const projectHostingUrl = screen.getByText(/live preview/i);
    const projectTechStack = screen.getByText(/tech stack/i);
    const projectDescription = screen.getByText(/description/i);
    expect(projectName).toBeInTheDocument();
    expect(projectCodeUrl).toBeInTheDocument();
    expect(projectHostingUrl).toBeInTheDocument();
    expect(projectTechStack).toBeInTheDocument();
    expect(projectDescription).toBeInTheDocument();
  });

  test('If not provided info should not be in dom', () => {
    const project = ProjectFactory('', '', '', [], '');
    render(<ProjectItem project={project} />);

    const projectName = screen.queryByText(/project name/i);
    const projectCodeUrl = screen.queryByText(/view code/i);
    const projectHostingUrl = screen.queryByText(/live preview/i);
    const projectTechStack = screen.queryByText(/tech stack/i);
    const projectDescription = screen.queryByText(/description/i);
    expect(projectName).not.toBeInTheDocument();
    expect(projectCodeUrl).not.toBeInTheDocument();
    expect(projectHostingUrl).not.toBeInTheDocument();
    expect(projectTechStack).not.toBeInTheDocument();
    expect(projectDescription).not.toBeInTheDocument();
  });
});
