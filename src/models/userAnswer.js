import Sequelize from 'sequelize';

export default (sequelize) => {
  const UserAnswer = sequelize.define("user_answer", {
    site_id: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'sites',
          // schema: 'schema'
        },
        key: 'id'
      },
      allowNull: false
    },
    question_no: {
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    answer: {
      type: Sequelize.STRING,
    }
  });
  return UserAnswer;
}