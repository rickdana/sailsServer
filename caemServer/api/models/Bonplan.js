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
    idbonplan:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'idbonplan',
        autoIncrement: true
    },
    titreBp:{
        type:'string',
        size:45,
        require:true,
        columnName:'titreBp'
    },
    contenuBp:{
        type:'text',
        size:1024,
        require:true,
        columnName:'contenuBp'
    },
    dateEmissionBp:{
        type:'date',
        require:true,
        columnName:'dateEmissionBp'
    },
    commerce_idcommerce:{
        model:'commerce'
    }
  }
};