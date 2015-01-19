/**
* Client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {
     autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'client',
  attributes: {
     idclient:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'idclient',
        autoIncrement: true
    },
    email:{
         type:'string',
        size:70,
        email:true,
        unique:true,
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
    dateNaissance:{
        type:'date',
        columnName:'dateNaissance'
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
        columnName:'codepostal'
    },
    favorie_idfavorie:{
        model:'favorie'
    },
    avisClient:{
        collection:'avis',
        via:'client_idclient'
    },
    // override default ToJSON
    toJSON: function() {
      var obj = this.toObject();
      delete obj.motdepasse;
      return obj;
    }

  },
beforeCreate: function(client, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(client.motdepasse, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          client.motdepasse = hash;
          console.log(hash);
          cb(null, client);
        }
      });
    });
  }
};

