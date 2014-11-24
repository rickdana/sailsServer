/**
* Commerces.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp

    tablename:'commerces',
  attributes: {
    refcommerce:{
        type: 'integer',
        unique: true,
        primaryKey:true,
        columnName:'refcommerce',
        autoIncrement: true
    },
    enseigne:{
        type: 'string',
        size: 70,
        required:true,
        columnName:'enseigne',
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
        size:45,
        columnName:'siteinternet'
    },
    moyenpayement:{
        type:'string',
        size:45,
        columnName:'moyenpayement'
    },
    motcle:{
        type:'text',
        size: 512,
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
        require:true,
        columnName:'motdepasse'
    },
    type:{
        type:'string',
        size:45,
        require:true,
        columnName:'type'
    },
    refgalerie:{
        model:'galerie'
    },
    avis:{
        collection:'avis',
        via:'refcommerce'
    },
    message:{
        collection:'message',
        via:'refcommerce'
    },
    bonplan:{
        collection:'bonplan',
        via:'commerce_refcommerce'
    },
    categorie_com:{
        collection:'categorie_com',
        via:'refcommerce'
    }
    BONPLANS:{
        collection:'bonplan'
        via:'refcommerce'
    }
  }
};

