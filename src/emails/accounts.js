const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'be10409.18@bitmesra.ac.in',
        subject : 'Thanks for joining in',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app`
    }).then(() => {
        console.log('Message Sent');
    }).catch((error) => {
        console.log(error.response.body);
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to : email,
        from : 'be10409.18@bitmesra.ac.in',
        subject : 'Sorry to see you go!',
        text : `Goodbye, ${name}. I hope to see you back sometime soon`
    }).then(() => {
        console.log('Message Sent');
    }).catch((e) => {
        console.log(e.response.body);
    });
};

module.exports = {
    sendCancelationEmail,
    sendWelcomeEmail
};