import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ProjectFactory,
  ProjectItem,
  ProjectSection,
} from '../components/Project';

describe('Project Factory tests', () => {
  test('getters work', () => {
    const project = ProjectFactory(
      'Todo list',
      'https://example.com/elit/todo-list',
      'https://elit.example.io/todo-list',
      ['HTML', 'SCSS', 'Javascript(Jquery)'],
      'A simple todo-list with jquery'
    );

    expect(project.name).toBe('Todo List');

    expect(project.codeUrl).toBe('https://example.com/elit/todo-list');

    expect(project.hostingUrl).toBe('https://elit.example.io/todo-list');

    expect(project.techStack).toEqual(
      expect.arrayContaining(['HTML', 'SCSS', 'Javascript(Jquery)'])
    );

    expect(project.description).toBe('A simple todo-list with jquery');

    expect(project).toHaveProperty('id');
  });
});

describe('ProjectItem component test', () => {
  test('If provided with everything renders all', () => {
    const project = ProjectFactory(
      'Todo list',
      'https://example.com/elit/todo-list',
      'https://elit.example.io/todo-list',
      ['HTML', 'SCSS', 'Javascript(Jquery)'],
      'A simple todo-list with jquery'
    );
    render(<ProjectItem project={project} />);

    const projectName = screen.getByText(new RegExp(project.name, 'i'));
    const projectCodeUrl = screen.getByText(/view code/i);
    const projectHostingUrl = screen.getByText(/live preview/i);
    const projectTechStack = screen.getByText(/tech stack/i);
    const projectDescription = screen.getByText(
      new RegExp(project.description, 'i')
    );
    expect(projectName).toBeInTheDocument();
    expect(projectCodeUrl).toBeInTheDocument();
    expect(projectHostingUrl).toBeInTheDocument();
    expect(projectTechStack).toBeInTheDocument();
    expect(projectDescription).toBeInTheDocument();
  });

  test('If not provided info should not be in dom', () => {
    const project = ProjectFactory('', '', '', [], '');
    render(<ProjectItem project={project} />);

    const projectCodeUrl = screen.queryByText(/view code/i);
    const projectHostingUrl = screen.queryByText(/live preview/i);
    const projectTechStack = screen.queryByText(/tech stack/i);
    expect(projectCodeUrl).not.toBeInTheDocument();
    expect(projectHostingUrl).not.toBeInTheDocument();
    expect(projectTechStack).not.toBeInTheDocument();
  });
});

describe('ProjectSection component test', () => {
  test('sets heading as projects', () => {
    render(<ProjectSection projects={[]} />);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  test.only('renders all project provided', () => {
    const projects = [
      ProjectFactory(
        'Todo list',
        'https://example.com/elit/todo-list',
        'https://elit.example.io/todo-list',
        ['HTML', 'SCSS', 'Javascript(Jquery)'],
        'A simple todo-list with jquery'
      ),
      ProjectFactory(
        'COVID Tracker App',
        'https://example.com/elit/covid-tracker',
        '',
        ['JavaScript(Jquery)', 'Covid API'],
        'A simple website which shows covid stats of the world, user’s location or any specific state of any country.'
      ),
      ProjectFactory(
        'Movie Database',
        'https://example.com/elit/movie-database',
        '',
        ['MongoDB', 'Express', 'React', 'NodeJS'],
        ''
      ),
    ];
    render(<ProjectSection projects={projects} />);
    expect(screen.getByText(/Todo list/i)).toBeInTheDocument();
    expect(screen.getByText(/COVID Tracker App/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie Database/i)).toBeInTheDocument();
  });
});
