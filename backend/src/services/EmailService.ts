interface IMailTo {
     name: string;
     email: string;
}

interface IMailMessage {
     subject: string;
     body: string;
     attachments?: string[];
}

// DTO == Data Transfer Object (DDD) 
interface IMessageDTO {
     to: IMailTo;
     message: IMailMessage;
}

interface IMailService {
     sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailService {
     sendMail({ to, message }: IMessageDTO) {
          console.log(`Email sent to ${to.name}: ${message.subject}!`);
     }
}

export default EmailService;