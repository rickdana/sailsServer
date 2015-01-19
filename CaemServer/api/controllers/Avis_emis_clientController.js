/**
 * Avis_emis_clientController
 *
 * @description :: Server-side logic for managing avis_emis_clients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	 findAvis:function(req,res){
            sails.log.debug("***********************FIND avis emis par client *********************");
                Avis_emis_client.find(req.query).exec(function(err,found){
                     console.log('Avis Id: '+req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(found)
                       res.json(found);
          });

    }
};

