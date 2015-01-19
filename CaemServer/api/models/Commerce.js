/**
* Commerce.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp
  attributes: {
    idcommerce:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'idcommerce',
        autoIncrement: true
    },
    enseigne:{
        type: 'string',
        size: 70,
        required:true,
        columnName:'enseigne',
    },
    categorie:{
        type:'string',
        size:45,
        require:true,
        columnName:'categorie'
    },
    description:{
        type:'string',
        size:45,
        require:true,
        columnName:'description'
    },
    rue:{
        type:'string',
        size:45,
        require:true,
        columnName:'rue'
    },
    ville:{
        type:'string',
        size:45,
        require:true,
        columnName:'ville'
    },
    codepostal:{
        type:'integer',
        require:true,
        columnName:'codepostal'
    },
    latitude:{
        type:'float',
        require:true,
        columnName:'latitude'
    },
    longitude:{
        type:'float',
        require:true,
        columnName:'longitude'
    },
    tel_fixe:{
        type:'string',
        size:20,
        require:true,
        columnName:'tel_fixe'
    },
    tel_mobile:{
        type:'string',
        size:20,
        columnName:'tel_mobile'
    },
    fax:{
        type:'string',
        size:20,
        columnName:'fax'
    },
    email:{
        type:'string',
        size:70,
        email:true,
        columnName:'email'
    },
    siteinternet:{
        type:'string',
        size:70,
        columnName:'siteinternet'
    },
    moyenpayement:{
        type:'string',
        size:45,
        columnName:'moyenpayement'
    },
    motcle:{
        type:'text',
        size: 1024,
        require:true,
        columnName:'motcle'
    },
    horaire:{
        type:'text',
        size:256,
        columnName:'horaire'
    },
    pseudo:{
        type:'string',
        size:45,
        require:true,
        columnName:'pseudo'
    },
    motdepasse:{
        type:'string',
        size:45,
        password:true,
        require:true,
        columnName:'motdepasse'
    },
    type:{
        type:'string',
        size:45,
        require:true,
        columnName:'type'
    },
    icone:{
         type:'text',
        size:256,
        required: true,
        columnName:'icone'
    },
    image1:{
        type:'text',
        size:256,
        required: true,
        columnName:'image1'
    },
    image2:{
        ttype:'text',
        size:256,
        columnName:'image2'
    },
    image3:{
        type:'text',
        size:256,
        columnName:'image3'
    },
    image4:{
        type:'text',
        size:256,
        columnName:'image4'
    },
    note:{
        type:'integer',
        columnName:'note'
    },
    bonplan:{
        collection:'bonplan',
        via:'commerce_idcommerce'
    },
    message:{
        collection:'message',
        via:'commerce_idcommerce'
    },
    avis:{
        collection:'avis',
        via:'commerce_idcommerce'
    },
    conseil:{
        collection:'conseils',
        via:'Com_idcommerce'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.motdepasse;
      return obj;
    }
  }
};

