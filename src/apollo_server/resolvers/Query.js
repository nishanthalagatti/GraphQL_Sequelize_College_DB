export async function getStudents(parent, args, contextValue, info) {
  const students = await contextValue.models.studentModel.findAll();
  const ans = students.map((student) => student.dataValues);
  return ans;
}

export async function getStudent(parent, args, contextValue, info) {
  const student = await contextValue.models.studentModel.findByPk(
    args.studentId
  );
  return student;
}

export async function getInstructors(parent, args, contextValue, info) {
  const instructors = await contextValue.models.instructorModel.findAll();
  const ans = instructors.map((instructor) => instructor.dataValues);
  return ans;
}

export async function getInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.models.instructorModel.findByPk(
    args.instructorId
  );
  return instructor;
}

export async function getCourses(parent, args, contextValue, info) {
  const courses = await contextValue.models.courseModel.findAll();
  const ans = courses.map((course) => course.dataValues);
  return ans;
}

export async function getCourse(parent, args, contextValue, info) {
  const course = await contextValue.models.courseModel.findByPk(args.courseId);
  return course;
}

export async function getTakes(parent, args, contextValue, info) {
  const takes = await contextValue.models.takeModel.findAll();
  const ans = takes.map((take) => take.dataValues);
  return ans;
}

export async function getTake(parent, args, contextValue, info) {
  const take = await contextValue.models.takeModel.findByPk(
    args.studentId,
    args.courseId
  );
  return take;
}
