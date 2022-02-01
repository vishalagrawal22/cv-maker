import { WorkExperienceFactory } from '../components/WorkExperience';

describe('Work Experience Factory tests', () => {
  test('sets all required fields', () => {
    const workExperience = WorkExperienceFactory(
      'Test Company',
      'Intern',
      'I did stuff which interns do',
      'August 2022',
      'September 2022'
    );
    expect(workExperience.company).toBe('Test Company');
    expect(workExperience.position).toBe('Intern');
    expect(workExperience.description).toBe('I did stuff which interns do');
    expect(workExperience.start).toBe('August 2022');
    expect(workExperience.end).toBe('September 2022');
    expect(workExperience).toHaveProperty('id');
  });
});
