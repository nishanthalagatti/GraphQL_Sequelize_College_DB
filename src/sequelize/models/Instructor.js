import { DataTypes } from "sequelize";

const getInstructorSchema = (sequelize) => {
  return sequelize.define("Instructor", {
    instructorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
  });
};
export default getInstructorSchema;
