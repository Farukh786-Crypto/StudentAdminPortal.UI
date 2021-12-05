import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl='https://localhost:44398/api/';

  constructor(private httpClient:HttpClient)
  {}
  getStudents():Observable<Student[]>
  {
    return this.httpClient.get<Student[]>(this.baseUrl+'Students');
  }
  getStudent(studentId:string):Observable<Student>
  {
    return this.httpClient.get<Student>(this.baseUrl+'Students/'+studentId);
  }
}
