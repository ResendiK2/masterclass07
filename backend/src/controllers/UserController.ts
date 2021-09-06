import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
     { id: '1', name: 'John', email: 'john@example.com' },
     { id: '2', name: 'Doe', email: 'doe@example.com' },
     { id: '3', name: 'Chris', email: 'chris@example.com' },
     { id: '4', name: 'Bob', email: 'bob@example.com' }
];

export default {
     async index(req: Request, res: Response) {
          return res.json(users);
     },

     async create(req: Request, res: Response) {
          const emailService = new EmailService();

          emailService.sendMail({

               to: {
                    name: 'John',
                    email: 'john@example.com'
               },

               message: {
                    subject: 'Welcome to system',
                    body: 'Welcome!'
               }

          });

          res.send();
     }
}