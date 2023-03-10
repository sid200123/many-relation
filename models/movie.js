"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Actor }) {
      // define association here
      this.belongsToMany(Actor, {
        through: "ActorMovies",
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "movies",
      modelName: "Movie",
    }
  );
  return Movie;
};
