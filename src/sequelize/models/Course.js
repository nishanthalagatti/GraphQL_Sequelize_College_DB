import { DataTypes } from "sequelize";

const getCourseSchema = (sequelize) => {
  return sequelize.define("Course", {
    courseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    courseHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

export default getCourseSchema;
