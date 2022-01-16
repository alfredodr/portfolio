import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
        const messageData = req.body.data;
        const { email, fullName, message, subject } = messageData;
        const msg = `
            Name:${fullName}\r\n
            Email:${email}\r\n
            Subject:${subject}\r\n
            Message:${message}
        `;
        const data = {
            to: "support@alfredojdominguez.com",
            from: "support@alfredojdominguez.com",
            subject: "new portfolio contact form message!",
            text: msg,
            html: msg.replace(/\r\n/g, "<br>"),
        };

        try{
            await mail.send(data);
            res.status(200).json({ status: "Ok" });
        }catch(error){
            res.status(500).json({ error: "failed to send message" })
        }     
}

//messageData comes from the the value of the key named body in the front end

//maps to route http://localhost:3000/api/mail

