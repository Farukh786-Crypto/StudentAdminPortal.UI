import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDTO } from 'src/app/models/ui-models/studentDTO.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentId: string | null | undefined;

  student:StudentDTO={
    Id:'',
    FirstName:'',
    LastName:'',
    DateOfBirth:'',
    Email:'',
    Mobile:0,
    GenderId:'',
    ProfileImageUrl:'',
    Gender:{
      Id:'',
      Description:''
    },
    Address:{
      Id:'',
      PhysicalAddress:'',
      PostalAddress:''
    }
  }

  constructor(private readonly studentService: StudentService
    , private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('Id');
        if (this.studentId) {
          this.studentService.getStudent(this.studentId)
            .subscribe(
                (successResponse)=>{
                  console.log(successResponse);
                  this.student=successResponse;
                }
            );
        }
      }
    );
  }

}
