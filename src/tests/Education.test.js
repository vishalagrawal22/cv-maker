import { EducationFactory } from '../components/Education';

describe('EducationFactory tests', () => {
  test('sets all required fields', () => {
    let education = EducationFactory(
      'Utah University',
      'BA in Cloud Systems',
      '8.5 CGPA',
      '2013',
      '2016'
    );
    expect(education.institute).toBe('Utah University');
    expect(education.degree).toBe('BA in Cloud Systems');
    expect(education.marks).toBe('8.5 CGPA');
    expect(education.start).toBe('2013');
    expect(education.end).toBe('2016');
    expect(education).toHaveProperty('id');
  });
});
