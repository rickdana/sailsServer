/**
 * GalerieController
 *
 * @description :: Server-side logic for managing galeries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    findGalerie:function(req,res){

                sails.log.debug("***********************FIND Galerie*********************");
                Galerie.find(req.query).exec(function(err,galerie){
                     console.log('create galerie: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(galerie)
                       res.json(galerie);
          });

    },
    createGalerie:function(req,res){
        sails.log.debug("***********************create Galerie*********************");
        Galerie.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
             if(err)
                      res.json({error:'oups error'},500);
             if(create)
                     console.log('create galerie: '+req.body);
                    res.ok(req.body);
        });
    },
    deleteGalerie:function(req,res){
        sails.log.debug("***********************delete Galerie*********************");
        Galerie.destroy({refgalerie:7}).exec(function deleteCB(err){
             if(err)
                      res.json({error:'oups error'},500);
             else
                    res.ok('galerie delete');
                     console.log('The record has been deleted');
          });
    },
    updateGalerie:function(req,res){
        Galerie.update({refgalerie:2},{image1:'./gal123'}).exec(function afterwards(err,updated){

          if (err) {
             res.serverError(err);

          }
                 console.log('Updated galerie : '+updated[0].refgalerie);
                 res.json(updated[0])
        });
    }
};

