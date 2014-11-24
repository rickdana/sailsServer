/**
* Centre_Dinteret.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'centre_Dinterets',
  attributes: {
    refcentreinteret:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refcentreinteret',
        autoIncrement: true
    },
    libeleci:{
        type:'string',
        size:45,
        require:true,
        columnName:'libeleci'
    },
    interet_client:{
        collection:'client',
        via:'centre_Dinteret',
        dominant:true
    },
    catCom:{
        collection:'categorie_com',
        via:'catcom_centre_dinteret',
        dominant:true
    }
    }
};

