import getStudentSchema from "./models/Student.js";
import getCourseSchema from "./models/Course.js";
import getInstructorSchema from "./models/Instructor.js";
import getTakeSchema from "./models/Take.js";

const getModels = (sequelize) => {
  const studentModel = getStudentSchema(sequelize);
  const courseModel = getCourseSchema(sequelize);
  const instructorModel = getInstructorSchema(sequelize);
  const takeModel = getTakeSchema(sequelize);

  studentModel.belongsToMany(courseModel, {
    through: takeModel,
    foreignKey: "studentId",
  });

  courseModel.belongsToMany(studentModel, {
    through: takeModel,
    foreignKey: "courseId",
  });

  instructorModel.hasOne(courseModel, { foreignKey: "instructorId" });

  return { studentModel, courseModel, instructorModel, takeModel };
};

export default getModels;
