import uniqid from 'uniqid';

function EducationFactory(
  institute,
  degree,
  marks,
  start,
  end,
  id = uniqid('Education-')
) {
  return { institute, degree, marks, start, end, id };
}

export { EducationFactory };
