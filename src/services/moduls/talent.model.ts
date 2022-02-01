import { IUserModel } from "./user.model";

export interface ITalentModel{
    id: 0,
    firstName: string;
    lastName: string;
    gender: boolean;
    dateOfBirth: "2022-01-22T11:30:09.569Z" | string;
    user: IUserModel;
}