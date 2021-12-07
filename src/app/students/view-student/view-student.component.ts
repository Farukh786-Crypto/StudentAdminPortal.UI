import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDTO } from 'src/app/models/ui-models/studentDTO.model';
import { GenderService } from 'src/app/Services/gender.service';
import { StudentService } from '../../Services/student.service';
import { GenderDTO } from './../../models/ui-models/genderDTO.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentId: string | null | undefined;

  student: StudentDTO = {
    Id: '',
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    Email: '',
    Mobile: 0,
    GenderId: '',
    ProfileImageUrl: '',
    Gender: {
      Id: '',
      Description: ''
    },
    Address: {
      Id: '',
      PhysicalAddress: '',
      PostalAddress: ''
    }
  }
  genderList: GenderDTO[] = [];

  constructor(private readonly studentService: StudentService
    , private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('Id');
        if (this.studentId) {
          this.studentService.getStudent(this.studentId)
            .subscribe(
              (successResponse) => {
                console.log(successResponse);
                this.student = successResponse;
              }
            );
          this.genderService.GenderList().subscribe(
            (successResponse) => {
              console.log(successResponse);
              this.genderList = successResponse;
            }
          );
        }
      }
    );
  }
  onUpdate(): void {
    console.log(this.student);
    // Call Student Service to Update Student
    this.studentService.updateStudent(this.student.Id, this.student)
      .subscribe(
        (successResponse) => {
          console.log(successResponse);
          // Show a notification
          this.snackBar.open('Student Updated Successfully', undefined, {
            duration: 2000
          });
        },
        (errorResponse) => {
          // Log it
        }
      );
  }
  onDelete(): void {
    // student service to delete
    this.studentService.deleteStudent(this.student.Id)
      .subscribe(
        (successResponse) => {
          console.log(successResponse);
          // Show notification
          this.snackBar.open('Student Deleted Successfully', undefined, {
            duration: 2000
          });

          setTimeout(()=>{
            this.router.navigateByUrl('students');
          },2000);

        },
        (errorresponse) => {
          console.log(errorresponse);
        }
      );
  }

}
