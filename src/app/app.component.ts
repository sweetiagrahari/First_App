import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { ClassListComponent } from "./class-list/class-list.component";
import { SchoolListComponent } from "./school-list/school-list.component";
import { HeaderComponent } from "./header/header.component";
import { ReuseableComponentComponent } from "./reuseable-component/reuseable-component.component";
import { ChildComponent } from "./child/child.component";
import{ FormsModule} from '@angular/forms';
import { UsdInrPipe } from "./pipes/usd-inr.pipe";
import { LoginformComponent } from "./loginform/loginform.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, UserListComponent, StudentListComponent, ClassListComponent, SchoolListComponent, HeaderComponent, ReuseableComponentComponent, ChildComponent, FormsModule, UsdInrPipe, LoginformComponent]
})
export class AppComponent {
  title = 'First_App';

  getName()
  {
    alert("function called");
  }
  getAnu(name:any,secondname:any)
  {
      alert(name);
      alert(secondname);
  }
  getData()
  {
    console.warn('call function');
  }
  getKey(val:string)
  {
    console.warn(val);
  }
  displayVal='';
  getValue(val:string)
  {
      console.warn(val);
      this.displayVal=val
  }
  count=0;
  counter(type:string)  
  {
   type==='add'?this.count++:this.count--;
   
  }
  name="property binding"
  disable=false;
  color="red";
  bgColor="blue";
  updateColor()
  {
   this.color="green";
   this.bgColor="skyblue"
  }
display=true
  toggle()
  {
   this.display
  }
  data=10;
  updateChild(){
    this.data=Math.floor(Math.random()*100)
  }

  
  userDetails=[
  { name:'Sweeti Agarahari',email:'sweeti@gmail.com'},
  { name:'Nitu Yadav',email:'nitu@gmail.com'},
  { name:'sarvesh',email:'sarvesh@gmail.com'},
  { name:'Om',email:'om@gmail.com'},

  ]
  updateData(item:string)
  {
    console.warn();
  }
   
  namme:any;
  getVal(item:any){
    console.warn(item);
  }

  capString(item:string){
    return item.toUpperCase();
  }

today=Date();
user={
  name:'sweeti',
  age:'24'
}

}
