export async function addStudent(parent, args, contextValue, info) {
  const student = await contextValue.models.studentModel.create(args);
  return student;
}

export async function addInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.models.instructorModel.create(args);
  return instructor;
}

export async function addCourse(parent, args, contextValue, info) {
  const course = await contextValue.models.courseModel.create(args);
  return course;
}

export async function addTake(parent, args, contextValue, info) {
  const take = await contextValue.models.takeModel.create(args);
  return take;
}

export async function updateStudent(parent, args, contextValue, info) {
  const student = await contextValue.models.studentModel.findByPk(
    args.studentId
  );
  if (student) return await student.update(args);
  return null;
}

export async function updateInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.models.instructorModel.findByPk(
    args.instructorId
  );
  if (instructor) return await instructor.update(args);
  return null;
}

export async function updateCourse(parent, args, contextValue, info) {
  const course = await contextValue.models.courseModel.findByPk(args.courseId);
  if (course) return await course.update(args);
  return null;
}

export async function updateTake(parent, args, contextValue, info) {
  const take = await contextValue.models.takeModel.findOne({
    where: {
      courseId: args.courseId,
      studentId: args.studentId,
    },
  });
  if (take) return await take.update(args);
  return null;
}

export async function deleteStudent(parent, args, contextValue, info) {
  const student = await contextValue.models.studentModel.findByPk(
    args.studentId
  );
  if (student) return await student.destroy(args);
  return null;
}

export async function deleteInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.models.instructorModel.findByPk(
    args.instructorId
  );
  if (instructor) return await instructor.destroy(args);
  return null;
}

export async function deleteCourse(parent, args, contextValue, info) {
  const course = await contextValue.models.courseModel.findByPk(args.courseId);
  if (course) return await course.destroy(args);
  return null;
}

export async function deleteTake(parent, args, contextValue, info) {
  const take = await contextValue.models.takeModel.findOne({
    where: {
      courseId: args.courseId,
      studentId: args.studentId,
    },
  });
  if (take) return await take.destroy(args);
  return null;
}
