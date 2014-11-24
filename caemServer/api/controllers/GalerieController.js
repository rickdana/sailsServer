/**
 * GalerieController
 *
 * @description :: Server-side logic for managing galeries
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 findGalerie:function(req,res){
        sails.log.debug("***********************FIND Galerie*********************");
        Galerie.find({}).exec(function(err,galerie){
            if(err)
                res.json({error:'oups error'},500);
            if(galerie)
                res.json(galerie);
        });

    }

};

