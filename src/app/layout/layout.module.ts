import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RoundedDirective } from './rounded.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RoundedDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
