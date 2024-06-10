import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/Models/School';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class  FormlistComponent implements OnInit {


  school: School= new School();

  constructor(private schoolService: SchoolService,private router:Router){}
  
  ngOnInit(): void {
  
   
  }

  saveSchool(){
    this.schoolService.CreateSchool(this.school).subscribe((data: any) =>{
      console.log(data);
      this.goToForm();
      
    },
      (    error: any) => console.log(error));
  } 
goToForm(){
this.router.navigate(['/dash/form']);
}



onSubmit(){
  this.saveSchool();
  console.log(this.school)
  // this.router.navigate(['/'])

}
}
