import { DataTypes } from "sequelize";

const getStudentSchema = (sequelize) => {
  return sequelize.define("Student", {
    studentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    address: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
  });
};

export default getStudentSchema;
