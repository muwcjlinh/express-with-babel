import Sequelize from 'sequelize';

export default (sequelize) => {
  const Question = sequelize.define("question", {
    site_id: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'sites',
        },
        key: 'id'
      },
      allowNull: false
    },
    no: {
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.STRING,
      comment: "Question's content"
    }
  });
  return Question;
}