import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes:string []=['spiderman','ironman','hulk','popeye'];
  heroeborrado:string='';

  borrar():void{
    this.heroeborrado=this.heroes.shift() || '';
   
 
  }
}
