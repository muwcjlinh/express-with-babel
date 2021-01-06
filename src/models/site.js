import Sequelize from 'sequelize';

export default (sequelize) => {
  const Site = sequelize.define("site", {
    name: {
      type: Sequelize.STRING,
    },
    login: {
      type: Sequelize.STRING,
    },
    sign_up: {
      type: Sequelize.STRING,
    },
    payment: {
      type: Sequelize.STRING,
    },
    profile: {
      type: Sequelize.STRING,
    },
  });
  return Site;
}