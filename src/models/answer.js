import Sequelize from 'sequelize';

export default (sequelize) => {
  const Answer = sequelize.define("answer", {
    question_id: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'questions',
          // schema: 'schema'
        },
        key: 'id'
      },
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      comment: "Answer's content"
    },
    type: {
      type: Sequelize.TEXT('tiny'),
      comment: 'form, link -> size.column_name, card, zipcode'
    }
  });
  return Answer;
}