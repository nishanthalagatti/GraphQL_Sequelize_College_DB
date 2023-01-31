export async function student(parent, args, contextValue, info) {
  const stud = await contextValue.models.studentModel.findByPk(
    parent.studentId
  );
  return stud;
}

export async function course(parent, args, contextValue, info) {
  const cour = await contextValue.models.courseModel.findByPk(parent.courseId);
  return cour;
}
