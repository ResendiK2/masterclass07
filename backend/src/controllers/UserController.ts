import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
     { name: 'John', email: 'john@example.com' },
     { name: 'Doe', email: 'doe@example.com' },
     { name: 'Chris', email: 'chris@example.com' },
     { name: 'Bob', email: 'bob@example.com' }
];

export default {
     async index(req: Request, res: Response) {
          return res.json(users);
     },

     async create(req: Request, res: Response) {
          const emailService = new EmailService();

          emailService.sendMail(
               { name: 'John', email: 'john@example.com' },
               { subject: 'Welcome to system', body: 'Welcome!' }
          );

          res.send();
     }
}