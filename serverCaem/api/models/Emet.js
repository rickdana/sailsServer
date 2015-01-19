/**
* Emet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'emet',
  attributes: {
    refavis:{
         type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refavis',
        autoIncrement: true
    },
    refclient:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refclient',
        autoIncrement: true
    }
  }
};

