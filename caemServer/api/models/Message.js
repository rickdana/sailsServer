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

    tablename:'message',
  attributes: {
    idmessage:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'idmessage',
        autoIncrement: true
    },
    commerce_idcommerce:{
       model:'commerce'
    },
    libelle:{
        type:'text',
        size:1024,
        require:true,
        columnName:'libelle'
    },
    dateEmission:{
        type:'date',
        require:true,
        columnName:'dateEmission'
    }
  }
};
