import { WorkExperienceFactory } from '../components/WorkExperience';

describe('Work Experience Factory tests', () => {
  test('sets all required fields', () => {
    const workExperience = WorkExperienceFactory(
      'Hilll, Watsica and Zboncak',
      'DevOps',
      'I built the customer-focused value-added project',
      '2016',
      '2020'
    );
    expect(workExperience.company).toBe('Hilll, Watsica and Zboncak');
    expect(workExperience.position).toBe('DevOps');
    expect(workExperience.description).toBe(
      'I built the customer-focused value-added project'
    );
    expect(workExperience.start).toBe('2016');
    expect(workExperience.end).toBe('2020');
    expect(workExperience).toHaveProperty('id');
  });
});
