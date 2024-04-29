module.exports = (sequelize, Sequelize) => {
    const petType = sequelize.define("pet_types", {
        image_name: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        image_desc: {
            type: Sequelize.STRING
        },
        
    }, {
        timestamps: true,
        underscored: true
    });

    return petType;
};