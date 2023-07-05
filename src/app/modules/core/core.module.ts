import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { SidenavService } from './services/sidenav.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, RouterModule, MaterialModule, AuthModule],
  exports: [NavbarComponent, SidenavComponent, FooterComponent],
  providers: [ThemeService, SidenavService],
})
export class CoreModule {}
