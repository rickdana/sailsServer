/**
* Galerie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp
    tablename:'galerie',
  attributes: {
    refgalerie:{
         type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refgalerie',
        autoIncrement: true
    },
    image1:{
        type:'string',
        size:45,
        require: true,
        colomnName:'image1'
    },
    image2:{
        type:'string',
        size:45,
        colomnName:'image2'
    },
    image3:{
        type:'string',
        size:45,
        colomnName:'image3'
    },
    image4:{
        type:'string',
        size:45,
        colomnName:'image4'
    },image5:{
        type:'string',
        size:45,
        colomnName:'image5'
    }
  }
};

