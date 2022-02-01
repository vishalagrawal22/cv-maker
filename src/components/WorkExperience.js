import uniqid from 'uniqid';

function WorkExperienceFactory(
  company,
  position,
  description,
  start,
  end,
  id = uniqid('WorkExperience-')
) {
  return { company, position, description, start, end, id };
}

export { WorkExperienceFactory };
