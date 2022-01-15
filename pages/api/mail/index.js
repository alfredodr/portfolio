import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ status: "Ok" });//send back the data in json format to the browser 
    } else if (req.method === "POST") {
        const messageData = req.body.data;
        const { email, fullName, message, subject } = messageData;
        const msg = `
            Name:${fullName}\r\n
            Email:${email}\r\n
            Message:${message}\r\n
            Subject:${subject}\r\n
        `;
        const data = {
            to: "support@alfredojdominguez.com",
            from: "support@alfredojdominguez.com",
            subject: "new portfolio contact form message!",
            text: msg,
            html: msg.replace(/\r\n/g, "<br>")
        };

        mail.send(data);

        res.status(201).json(data);
    }
}

//messageData comes from the the value of the key named body in the front end

//maps to route http://localhost:3000/api/mail

