/**
* Conseil.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp
     tablename:'conseils',
  attributes: {
        idconseil:{
            type: 'integer',
            unique: true,
            primaryKey:true,
            columnName:'idconseil',
            autoIncrement: true
        },
        titre:{
            type:'string',
            size:50,
            require:true,
            colomnName:'titre'
        },
        contenu_conseil:{
            type:'text',
            size:1024,
            require:true,
            colomnName:'contenu_conseil'
        },
        dateEmission:{
             type:'date',
            require:true,
            columnName:'dateEmission'
        },
        Com_idcommerce:{
        model:'commerce'
    }
  }
};