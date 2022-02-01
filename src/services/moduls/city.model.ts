import { ICountryModel } from './country.model'
export interface ICityModel{
  id: number;
  name: string;
  country: ICountryModel;
}