/**
* Favorie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'favorie',
  attributes: {
    reffavorie:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'reffavorie',
        autoIncrement: true
    },
    favorie1:{
        type:'integer',
        columnName:'favorie1'
    },
     favorie2:{
        type:'integer',
        columnName:'favorie2'
    },
     favorie3:{
        type:'integer',
        columnName:'favorie3'
    },
     favorie4:{
        type:'integer',
        columnName:'favorie4'
    },
     favorie5:{
        type:'integer',
        columnName:'favorie5'
    },
     favorie6:{
        type:'integer',
        columnName:'favorie6'
    },
     favorie7:{
        type:'integer',
        columnName:'favorie7'
    },
     favorie8:{
        type:'integer',
        columnName:'favorie8'
    },
     favorie9:{
        type:'integer',
        columnName:'favorie9'
    },
     favorie10:{
        type:'integer',
        columnName:'favorie10'
    }
  }
};

