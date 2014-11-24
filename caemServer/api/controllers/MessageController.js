/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 findMessage:function(req,res){
        sails.log.debug("***********************FIND Message*********************");
        Message.find({}).exec(function(err,message){
            if(err)
                res.json({error:'oups error'},500);
            if(message)
                res.json(message);
        });

    }
};

