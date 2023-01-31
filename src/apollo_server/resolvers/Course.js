export async function hasStudents(parent, args, contextValue, info) {
  const students = await contextValue.models.takeModel.findAll({
    where: {
      courseId: parent.courseId,
    },
  });
  const ans = students.map((student) => student.dataValues);
  return ans;
}

export async function instructor(parent, args, contextValue, info) {
  const inst = await contextValue.models.instructorModel.findByPk(
    parent.instructorId
  );
  return inst;
}
