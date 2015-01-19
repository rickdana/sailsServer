/**
 * CommerceController
 *
 * @description :: Server-side logic for managing commerces
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
// find methode
      findCommerce:function(req,res){

            sails.log.debug("***********************FIND COMMERCE*********************");
                Commerce.find(req.query).exec(function(err,com){
                     console.log('Commercej: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
     findCommerceplus:function(req,res){

            sails.log.debug("***********************FIND COMMERCE*********************");
                Commerce.find(req.query).exec(function(err,com){
                     console.log('Commercej: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
// create method
    createCommerce:function(req,res){
        sails.log.debug("***********************create Galerie*********************");
        Commerce.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
             if(err)
                      res.json({error:'oups error'},500);
             if(create)
                     console.log('create galerie: '+req.body);
                    res.ok(req.body);
        });
    },
// delete method
    deleteCommerce:function(req,res){
        sails.log.debug("***********************delete Galerie*********************");
       Commerce.destroy({refcommerce:1}).exec(function deleteCB(err){
             if(err)
                      res.json({error:'oups error'},500);
             else
                    res.ok('commerce delete');
                     console.log('The record has been deleted');
          });
    },
// update metode
     updateCommerce:function(req,res){
        Commerce.update(/*a construire*/).exec(function afterwards(err,updated){

          if (err) {
             res.serverError(err);

          }
                 console.log('Updated galerie : '+updated[0].refgalerie);
                 res.json(updated[0])
        });
    }
};

