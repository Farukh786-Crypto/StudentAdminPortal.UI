import { AddressDTO } from "./addressDTO.model";
import { GenderDTO } from "./genderDTO.model";

export interface StudentDTO{
  Id:string,
  FirstName:string,
  LastName:string,
  DateOfBirth:string,
  Email:string,
  Mobile:number,
  ProfileImageUrl:string,
  GenderId:string,
  Gender:GenderDTO,
  Address:AddressDTO
}
