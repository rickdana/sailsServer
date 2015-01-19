/**
 * CommerceController
 *
 * @description :: Server-side logic for managing commerces
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
// find methode
      findClient:function(req,res){

            sails.log.debug("***********************FIND Client*********************");
                Client.find(req.query).exec(function(err,com){
                     console.log('Commercej: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
// create method
    createClient:function(req,res){
        sails.log.debug("***********************create Client*********************");
        Client.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
             if(err)
                      res.json({error:'oups error'},500);
             if(create)
                     console.log('create galerie: '+req.body);
                    res.ok(req.body);
        });
    },
// delete method
    deleteClient:function(req,res){
        sails.log.debug("***********************delete Client*********************");
       Client.destroy(req.query).exec(function deleteCB(err){
             if(err)
                      res.json({error:'oups error'},500);
             else
                    res.ok('commerce '+req.query+' delete');
                     console.log('The record has been deleted');
          });
    },
// update metode
     updateClient:function(req,res){
        sails.log.debug("***********************Update Client*********************");
        Client.update(/*a construire*/).exec(function afterwards(err,updated){

          if (err) {
             res.serverError(err);

          }
                 console.log('Updated galerie : '+updated[0].refgalerie);
                 res.json(updated[0])
        });
    }
};

