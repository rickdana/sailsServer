/**
* Avis_emis_client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'avis_emis_client',
  attributes: {
    client_idclient:{
         type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'client_idclient',
        autoIncrement: true
    },
    avis_idavis:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'avis_idavis',
        autoIncrement: true
    }
  }
};
