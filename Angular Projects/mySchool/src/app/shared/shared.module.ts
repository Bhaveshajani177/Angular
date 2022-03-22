import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// components

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}
