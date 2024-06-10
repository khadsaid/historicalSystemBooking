import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { PrivateGroup } from 'src/app/Models/PrivateGroups';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  
  privateGroup: PrivateGroup= new PrivateGroup();

  constructor(private  groupService: GroupService,private router:Router){}
  
  ngOnInit(): void {
  
   
  }

  saveSchool(){
    this.groupService.CreateGroup(this.privateGroup).subscribe((data: any) =>{
      console.log(data);
      this.goToForm();
      
    },
      (    error: any) => console.log(error));
  } 
goToForm(){
this.router.navigate(['/dash/private_groups']);
}



onSubmit(){
  this.saveSchool();
  console.log(this.privateGroup)
  // this.router.navigate(['/'])

}

}
