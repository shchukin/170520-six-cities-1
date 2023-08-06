import {UserType} from './userType';

export type CommentType = {
  id: number;
  comment: string;
  rating: number;
  date: string;
  user: UserType;
}
