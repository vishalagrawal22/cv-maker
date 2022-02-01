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

describe('ProjectSection component test', () => {
  test('sets heading as projects', () => {
    render(<ProjectSection projects={[]} />);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  test('renders all project provided', () => {
    const projects = [
      ProjectFactory(
        'Competitive Programming Practice Tool',
        'https://github.com/vishalagrawal22/CPPT',
        '',
        ['Python - Click, PyYaml, Pathlib, Subprocess Libraries', 'Yaml'],
        "A command-line tool to automate competitive programming workflow without cluttering the user's workspace with test case data."
      ),
      ProjectFactory(
        'Tag Hider CodeForces',
        'https://github.com/vishalagrawal22/tag-hider-codeforces',
        '',
        ['JavaScript(Jquery)', 'CodeForces API'],
        'The UserScript adds a button to toggle on/off problem tags on codeforces from the problem page itself. I also wrote a blog sharing the script with the cf community link to cf blog.'
      ),
      ProjectFactory(
        'Covid Statistics',
        'https://github.com/vishalagrawal22/covid-statistics',
        'https://vishalagrawal22.github.io/covid-statistics/',
        ['JavaScript(Jquery)', 'covid stats and reverse geocoding APIs'],
        'A simple website which shows covid stats of the world, user’s location or any specific state of any country.'
      ),
    ];
    render(<ProjectSection projects={projects} />);
    expect(
      screen.getByText(/Competitive Programming Practice Tool/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Tag Hider CodeForces/i)).toBeInTheDocument();
    expect(screen.getByText(/Covid Statistics/i)).toBeInTheDocument();
  });
});
