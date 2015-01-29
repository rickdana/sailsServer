//Email service
var nodemailer = require('nodemailer');
// create reusable transporter object using SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'app.caem@gmail.com',
                pass: 'Newbie2014'
            }

        });
module.exports = {

    /***************************************************************
  *
  *                 Email de bienvenu
  *
  * **************************************************************/
WelcomeEmail : function(client){

    // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'CAEM APP <app.caem@gmail.com>', // sender address
            to: client.email, // list of receivers
            subject: 'Bienvenu', // Subject line
           // text: 'Hello world ✔', // plaintext body
            html: '<p>La Caem vous remercie d\'avoir choisie de favoriser le commerce local !</p>' // html body
        };

        //envoi du mail
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent : '+info.response);
            }
        });

    }

};
