/**
 * CommerceController
 *
 * @description :: Server-side logic for managing commerces
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
//count favorie
    countFavorie:function(req,res){
        Favorie.count().exec(function countCB(error, found) {
        console.log('There are ' + found + ' galerie');
            return found;
          // There are 1 users called 'Flynn'
          // Don't forget to handle your errors
        });
    },
// find methode
      findFavorie:function(req,res){

            sails.log.debug("***********************FIND Favorie*********************");
                Favorie.find(req.query).exec(function(err,com){
                     console.log('Client: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
// create method
    createFavorie:function(req,res){
        sails.log.debug("***********************create Favorie*********************");

        Favorie.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
            console.log(create);
             if(err)
                    res.json({error:'oups error de creation '},500);
                    console.log(err);
             if(create)
                     console.log('create Favorie: '+req.body);
                    res.json(create);
                    res.ok(req.body);
        });
    },
// delete method
    deleteFavorie:function(req,res){
        sails.log.debug("***********************delete Favorie*********************");
       Favorie.destroy(req.query).exec(function deleteCB(err){
             if(err)
                      res.json({error:'oups error'},500);
             else
                    res.ok('favorie '+req.query+' delete');
                     console.log('The record has been deleted');
          });
    },
// update metode
     updateFavorie:function(req,res){
        sails.log.debug("***********************Update Favorie*********************");
        Favorie.update(/*a construire*/).exec(function afterwards(err,updated){

          if (err) {
             res.serverError(err);

          }
                 console.log('Updated Favorie : '+updated[0].refgalerie);
                 res.json(updated[0])
        });
    }
};

