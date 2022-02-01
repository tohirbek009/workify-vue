import { IUserModel } from "./user.model";
import { IIndustryModel } from './industry.model'
export interface ICompanyModel{
  id: number; // not required
  name: string;
  website: string;
  industry:  IIndustryModel;
  user: IUserModel;
}