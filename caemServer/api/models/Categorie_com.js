/**
* Categorie_com.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'categorie_com',
  attributes: {
    refcategorie_com:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refcategorie_com',
        autoIncrement: true
    },
    libellecat:{
        type:'string',
        size:45,
        require:true,
        columnName:'libellecat'
    },
    descriptif:{
        type:'string',
        size:45,
        columnName:'descriptif'
    },
    refcommerce:{
        model:'categorie_com',
        via:'categorie_com'
        dominant:true
    },
    catcom_centre_dinteret:{
        collection:'centre_Dinteret',
        via:'catCom'
    }
  }
};

