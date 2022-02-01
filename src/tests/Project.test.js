import { ProjectFactory } from '../components/Project';

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
