/**
* Bonplan.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'bonplan',
  attributes: {
    refbonplan:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refbonplan',
        autoIncrement: true
    },
    contenubp:{
        type:'text',
        size:1024,
        require:true,
        columnName:'contenubp'
    },
    dateEmission:{
        type:'date',
        require:true,
        columnName:'dateEmission'
    },
    commerce_refcommerce:{
        type:'integer',
        columnName:'commerce_refcommerce'
    }
  }
};


