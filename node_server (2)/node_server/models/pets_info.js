module.exports = (sequelize, Sequelize) => {
    const PetInfo = sequelize.define("pets_infos", {
        pettype: {
            type: Sequelize.STRING
        },
        pettitle: {
            type: Sequelize.STRING
        },
        petinfo1: {
            type: Sequelize.STRING
        },
        pets_diet: {
            type: Sequelize.STRING
        },
        health_treatment: {
            type: Sequelize.STRING
        },
        cast_breeding: {
            type: Sequelize.STRING
        },
        area_observation: {
            type: Sequelize.STRING
        },
        environment: {
            type: Sequelize.STRING
        },
        vaccination: {
            type: Sequelize.STRING
        },
        petinfo2: {
            type: Sequelize.TEXT
        },
        pet_image: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return PetInfo;
};