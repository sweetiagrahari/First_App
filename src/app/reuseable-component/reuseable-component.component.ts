import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-reuseable-component',
  standalone: true,
  imports: [],
  templateUrl: './reuseable-component.component.html',
  styleUrl: './reuseable-component.component.css'
})
export class ReuseableComponentComponent implements OnInit{

  constructor(){}
@Input() item:{name:string,email:string}={name:'',email:''};

  ngOnInit():void{

  }

}
