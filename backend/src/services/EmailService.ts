interface IMailTo {
     name: string;
     email: string;
}

interface IMailMessage {
     subject: string;
     body: string;
     attachments?: string[];
}

class EmailService {
     sendMail(to: IMailTo, message: IMailMessage) {
          console.log(`Email sent to ${to.name}: ${message.subject}!`);
     }
}

export default EmailService;