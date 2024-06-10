import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
   
  dropdownVisible: boolean = false;

  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.dropdownVisible = !this.dropdownVisible;
  }

  closeDropdown(event: Event): void {
    event.preventDefault();
    this.dropdownVisible = false;
  }
  }


