const Course = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];
  const courses = ["DoniyorFX - mobilografiya"];
  if (courses[value - 1]) {
    return courses[value - 1];
  } else {
    return value;
  }
};

export default Course;
