import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDTO } from '../models/ui-models/studentDTO.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:StudentDTO[]=[];
  displayedColumns: string[] = ['FirstName','LastName','DateOfBirth','Email','Mobile','Gender'];
  dataSource:MatTableDataSource<StudentDTO>=new MatTableDataSource<StudentDTO>();
  @ViewChild(MatPaginator) matPaginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;
  filterString='';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // Fetch Students
    this.studentService.getStudent()
      .subscribe(
        (sucessResponse) => {
            this.students=sucessResponse;
            this.dataSource=new MatTableDataSource<StudentDTO>(this.students);

            if(this.matPaginator)
            {
                this.dataSource.paginator=this.matPaginator;
            }

            if(this.matSort)
            {
                this.dataSource.sort=this.matSort;
            }
        },
        (errorResponse) =>{
            console.log(errorResponse);
        }
      );
  }
  filterStudents(){
      this.dataSource.filter=this.filterString.trim().toLowerCase();
  }

}
