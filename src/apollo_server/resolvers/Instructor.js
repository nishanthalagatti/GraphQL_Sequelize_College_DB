export async function teaches(parent, args, contextValue, info) {
  const teachs = await contextValue.models.courseModel.findAll({
    where: {
      instructorId: parent.instructorId,
    },
  });
  const ans = teachs.map((teach) => teach.dataValues);
  return ans;
}
