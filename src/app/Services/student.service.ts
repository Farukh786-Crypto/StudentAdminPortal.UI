import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';
import { UpdateStudentRequest } from './../models/api-models/update-student-request.model';
import { AddStudentRequest } from '../models/api-models/add-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://localhost:44398/api/';

  constructor(private httpClient: HttpClient) { }
  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl + 'Students');
  }
  getStudent(studentId: string): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl + 'Students/' + studentId);
  }
  addStudent(studentRequest: Student): Observable<Student> {
    const addStudentRequest: AddStudentRequest = {
      FirstName: studentRequest.FirstName,
      LastName: studentRequest.LastName,
      DateOfBirth: studentRequest.DateOfBirth,
      Email: studentRequest.Email,
      Mobile: studentRequest.Mobile,
      GenderId: studentRequest.GenderId,
      PhysicalAddress: studentRequest.Address.PhysicalAddress,
      PostalAddress: studentRequest.Address.PostalAddress
    }
    return this.httpClient.post<Student>(this.baseUrl + 'Students/add',addStudentRequest);
  }
  updateStudent(studentId: string, studentRequest: Student): Observable<Student> {
    const UpdateStudentRequest: UpdateStudentRequest = {
      FirstName: studentRequest.FirstName,
      LastName: studentRequest.LastName,
      DateOfBirth: studentRequest.DateOfBirth,
      Email: studentRequest.Email,
      Mobile: studentRequest.Mobile,
      GenderId: studentRequest.GenderId,
      PhysicalAddress: studentRequest.Address.PhysicalAddress,
      PostalAddress: studentRequest.Address.PostalAddress
    }
    return this.httpClient.put<Student>(this.baseUrl + 'Students/' + studentId, UpdateStudentRequest);
  }
  deleteStudent(studentId: string): Observable<Student> {
    return this.httpClient.delete<Student>(this.baseUrl + 'Students/' + studentId);
  }
}
