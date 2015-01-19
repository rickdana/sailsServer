/**
 * Categorie_comController
 *
 * @description :: Server-side logic for managing categorie_coms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 findCategorie_com:function(req,res){

            sails.log.debug("***********************FIND Categorie*********************");
                Categorie_com.find(req.query).exec(function(err,com){
                     console.log('Catégorie: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
    findCategorie_coma:function(req,res){

            sails.log.debug("***********************FIND a*********************");
                Categorie_com.find()
                .where({ libelecat: { startsWith: 'a%' }})
                .exec(function(err,com){
                    // console.log('Catégorie: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    }
};

