module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      imgurl: {
        type: Sequelize.STRING
      },
      pettype: {
        type: Sequelize.STRING
      },
    });
  
    return Tutorial;
  };