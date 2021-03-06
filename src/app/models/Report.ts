import {User} from './User';

export class Report {
  _id: string;
  createdAt: Date | string;
  type: string;
  content: string;
  author: User | string;
  subject: User | string;
  resolved: number | string;
  notes: {_id: string, content: string, creator: User}[];
  watching_users: User[] | string[];
}
