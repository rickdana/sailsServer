/**
* Client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'client',
  attributes: {
     refclient:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refclient',
        autoIncrement: true
    },
    email:{
         type:'string',
        size:70,
        email:true,
        columnName:'email'
    },
    motdepasse:{
        type:'string',
        size:45,
        required:true,
        columnName:'motdepasse'
    },
    nom:{
         type: 'string',
        size: 45,
        columnName:'nom',
    },
    prenom:{
         type: 'string',
        size: 45,
        columnName:'prenom',
    },
    datenaissance:{
        type:'date',
        required:true,
        columnName:'datenaissance'
    },
    tel:{
         type:'string',
        size:20,
        required:true,
        columnName:'tel'
    },
    adresse:{
        type:'string',
        size:45,
        required:true,
        columnName:'adresse'
    },
    ville:{
        type:'string',
        size:45,
        required:true,
        columnName:'ville'
    },
    codepostal:{
       type:'integer',
        required:true,
        columnName:'codpostal'
    },
    favorie_reffavorie:{
        type:'integer',
        columnName:'favorie_reffavorie'
    }
  }
};
