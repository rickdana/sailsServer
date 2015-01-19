/**
* News.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'news',
  attributes: {
    idnews:{
         type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'idnews',
        autoIncrement: true
    },
    dateEmission:{
        type:'date',
        require:true,
        columnName:'dateEmission'
    },
    contenu:{
        type:'text',
        size:'1024',
        require:true,
        columnName:'contenu'
    },
    image:{
        type:'text',
        size:256,
        columnName:'image'
    }
  }
};
