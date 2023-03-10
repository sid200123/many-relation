"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie }) {
      // define association here
      this.belongsToMany(Movie, {
        through: "ActorMovies",
        foreignKey: "actorId",
      });
    }
  }
  Actor.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "actors",
      modelName: "Actor",
    }
  );
  return Actor;
};
