/**
 * CommerceController
 *
 * @description :: Server-side logic for managing commerces
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'CAEMaPP';
module.exports = {
// find methode
    findClient:function(req,res){

            sails.log.debug("***********************FIND Client*********************");
                Client.find(req.query).exec(function(err,com){
                     console.log(req.query);
                if(err)
                      res.json({error:'oups error'},500);
               if(com)
                       res.json(com);
          });

    },
  login:function(req,res){
        var param = null;
        param = req.params.all();
        sails.log.debug(param);
        Client.findOne({email: param.email}).exec(function(err,client){
            sails.log.debug(param.email);
            if(err){
                  res.json({error:'oups error'},500);
                  sails.log.debug("Une Erreur est apparue !!!!");
            }
            if(!client){
                  res.json({error:'Aucun client trouvé'},200);
                  sails.log.debug("Aucun client trouvé !!!!");
            }
            if(client){
               sails.log.debug("client trouvé !!!!");
             // sails.log.debug(param.motdepasse);
               //sails.log.debug(client.motdepasse);
                bcrypt.compare(param.motdepasse , client.motdepasse, function(err, pass) {
                if(err) res.json(err);
                if(pass == true){
                  var expires = moment().add(5,'m');
                   sails.log.debug('Token expire dans :'+expires);
                    req.session = client.id;
                    // Création du Token
                    var token = jwt.encode({
                      iss: client.email,
                      exp: expires
                    },secret);
                    client.token = token;
                    client.isAuthenticate = 'true';
                    res.json(client);
                }else{
                    var erreur = {erreur:'Mot de passe érronée !'};
                    erreur.notAuthenticate = 'false';
                    res.json(erreur);
                }

            });

            }

        });
    },
// create method
    createClient:function(req,res){
        sails.log.debug("***********************create Client*********************");
        // on crée en premier une galerie avant de créer un compte client
         Favorie.create(req.body).exec(function createCB(err,create){
            console.log(req.body);
             if(err)
             // code exécuté en cas d'erreur
                    res.json({error:'oups error de creation '},500);
                    console.log(err);
             if(create)
              //if succes on rajoute idfavorie au body de la requette qu'on injecte par la suite pour créer le compte
                    console.log('create Favorie: '+req.body);
                    req.body.favorie_idfavorie = create.idfavorie;
                    Client.create(req.body).exec(function createFindCB(err,create){
                           if(err)
                                  res.json({error:'oups error de creation '},500);
                                  console.log(err);
                           if(create)
                                  console.log('create Client: '+req.body);
                                  sails.log.debug(req.body);
                                  sails.log.debug(create);
                                  res.json(create);
                           });
                    sails.log.debug(req.body);
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
        var param = null;
        var token = req.get('token');
        param = req.params.all();
        sails.log.debug(req.body);
         sails.log.debug(param.idclient);
         if(token){
                var decoded = jwt.decode(token,secret);
                sails.log.debug(moment());
                sails.log.debug('expire dans: '+decoded.exp);
                if (moment().isAfter(decoded.exp)) {
                        res.json({erreur:'Session expire'});
                        sails.log.debug('Token expired');
                  }
                  else{
                      sails.log.debug('Has good token');
                      Client.update({idclient:param.idclient},req.body).exec(function afterwards(err,updated){

                          if (err) {
                             res.serverError(err);
                             sails.log.debug(err);

                          }
                          if(updated){
                              console.log('Updated client : '+updated);
                              res.json({update:'Mise à jour réussi'});
                          }
                        });

                  }

            }

    }
};
