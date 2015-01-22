/**
 * CommerceController
 *
 * @description :: Server-side logic for managing commerces
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
//count favorie
    countNews:function(req,res){
        News.count().exec(function countCB(error, found) {
        console.log('There are ' + found + ' News');
            return found;
          // There are 1 users called 'Flynn'
          // Don't forget to handle your errors
        });
    },
// find methode
      findNews:function(req,res){

            sails.log.debug("***********************FIND News*********************");
                News.find(req.query).exec(function(err,news){
                     console.log('news: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(news)
                       res.json(news);
          });

    },
// create method
    createNews:function(req,res){
        sails.log.debug("***********************create News*********************");

        News.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
            console.log(create);
             if(err)
                    res.json({error:'oups error de creation '},500);
                    console.log(err);
             if(create)
                     console.log('create News: '+req.body);
                    res.json(create);
                    res.ok(req.body);
        });
    },
// delete method
    deleteFavorie:function(req,res){
        sails.log.debug("***********************delete News*********************");
       News.destroy(req.query).exec(function deleteCB(err){
             if(err)
                      res.json({error:'oups error'},500);
             else
                    res.ok('favorie '+req.query+' delete');
                     console.log('The record has been deleted');
          });
    },
// update metode
     updateNews:function(req,res){
        sails.log.debug("***********************Update Favorie*********************");
        News.update(/*a construire*/).exec(function afterwards(err,updated){

          if (err) {
             res.serverError(err);

          }
                 console.log('Updated Favorie : '+updated[0].refgalerie);
                 res.json(updated[0])
        });
    }
};

