import { ICityModel } from "./city.model";
export interface IUserModel{
  id: number;  // not required
  email: string;
  emailConfirmed: boolean;  // just for binding
  password: string | null;
  phoneNumber: string;
  registeredDate: string;  // not required to send in registration, will use in profile
  role: number;   // not required to send
  userType: number;  // not required to send
  profileImage: string | null;
  aboutMe: string;
  city: ICityModel;  // will send after dropdown selection 
  lastLogin: string;   // not required to send in registration, will use in profile
}