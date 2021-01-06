import Sequelize from 'sequelize';

export default (sequelize) => {
  const Question = sequelize.define("question", {
    content: {
      type: Sequelize.STRING,
      comment: "Question's content"
    }
  });
  return Question;
}