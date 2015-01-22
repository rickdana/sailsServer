/**
 * AvisController
 *
 * @description :: Server-side logic for managing avis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var jwt  =require('jwt-simple');
var moment = require('moment');
var secret = 'CAEMaPP';
module.exports = {
	findAvis:function(req,res){

            sails.log.debug("***********************FIND AVIS*********************");
                Avis.find(req.query).exec(function(err,com){
                     console.log('avis: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
     createAvis:function(req,res){

            sails.log.debug("***********************Create AVIS*********************");
            param = req.params.all();
            var token = param.token;
            if(token){
                var decoded = jwt.decode(token,secret);
                sails.log.debug(moment());
                sails.log.debug('expire dans: '+decoded.exp);
                if (moment().isAfter(decoded.exp)) {
                        res.end('Access token has expired', 400);
                        sails.log.debug('Token expired');
                  }
                  else{
                      sails.log.debug('Has good token');
                      res.ok();
                  }


            }


    }
};

