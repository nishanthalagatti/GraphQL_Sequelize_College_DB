export async function takesCourse(parent, args, contextValue, info) {
  const takes = await contextValue.models.takeModel.findAll({
    where: {
      studentId: parent.studentId,
    },
  });
  const ans = takes.map((take) => take.dataValues);
  return ans;
}
