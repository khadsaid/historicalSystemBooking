import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PrivateGroup } from 'src/app/Models/PrivateGroups';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-groups',
  templateUrl: './private-groups.component.html',
  styleUrls: ['./private-groups.component.css']
})
export class PrivateGroupsComponent  implements OnInit{

  privateGroup!:PrivateGroup[];


  constructor (private groupService :GroupService, private router:Router){}
 
  ngOnInit(): void {
    this.getPrivateGroup();
  }
 
  getPrivateGroup(){
   this.groupService.getgroup().subscribe (data => {
    this.privateGroup = data; 
   })
  }
 
   onAddShool(){
     
     this.router.navigate(['/dash/group_list'])
 
   }
 
   deleteSchool(Id:number){
    this.groupService.deleteGroup(Id).subscribe( (data: any) =>{
     console.log(data);
     this.getPrivateGroup()
    })
   }
 
  
}
