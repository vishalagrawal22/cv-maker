import { EducationFactory } from '../components/Education';

describe('EducationFactory tests', () => {
  test('sets all required fields', () => {
    let education = EducationFactory(
      'BIT Mesra',
      'BTECH',
      '9 CGPA',
      '2020',
      '2024'
    );
    expect(education.institute).toBe('BIT Mesra');
    expect(education.degree).toBe('BTECH');
    expect(education.marks).toBe('9 CGPA');
    expect(education.start).toBe('2020');
    expect(education.end).toBe('2024');
    expect(education).toHaveProperty('id');
  });
});
