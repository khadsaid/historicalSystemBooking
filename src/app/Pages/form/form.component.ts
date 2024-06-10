import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import{School} from '../../Models/School';
import { SchoolService } from 'src/app/services/school.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
  schools!:School[];


 constructor (private schoolService :SchoolService, private router:Router){}

 ngOnInit(): void {
   this.getSchool();
 }

 getSchool(){
  this.schoolService.getSchool().subscribe (data => {
   this.schools = data; 
  })
 }

  onAddShool(){
    
    this.router.navigate(['/dash/formlist'])

  }

  deleteSchool(Id:number){
   this.schoolService.deleteSchool(Id).subscribe( (data: any) =>{
    console.log(data);
    this.getSchool()
   })
  }

 

}
