import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // menu: string[]=['Home', 'Products', 'Contacts']
  // loading: boolean= true;
  // status: string= "";
  // cargaMenu:boolean= false;
  // nombre:string="";
  // apellido:string="";

  // constructor(){
  //   setInterval(()=>{
  //     this.loading=false;
  //   },3000)
  // }
  // mostrarMenu=()=>{
  //   this.cargaMenu=!this.cargaMenu;
  // }
  birthday = new Date(1996,11,12);
}
