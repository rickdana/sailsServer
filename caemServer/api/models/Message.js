/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'messages',
  attributes: {
    refmessage:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refmessage',
        autoIncrement: true
    },
    refcommerce:{
        model:'commerces',
    },
    libelle:{
        type:'string',
        size:512,
        require:true,
        columnName:'libelle'
    }
  }
};

