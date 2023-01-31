import { DataTypes } from "sequelize";

const getTakeSchema = (sequelize) => {
  return sequelize.define("Take", {
    grade: {
      type: DataTypes.STRING(1),
      allowNull: false,
      validate: { isAlpha: true },
    },
  });
};

export default getTakeSchema;
