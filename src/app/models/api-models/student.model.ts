import { Address } from "../address.model";
import { Gender } from "./gender.model";

export interface Student{
  Id:string,
  FirstName:string,
  LastName:string,
  DateOfBirth:string,
  Email:string,
  Mobile:number,
  ProfileImageUrl:string,
  GenderId:string,
  Gender:Gender,
  Address:Address
}
