import { Component, inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterLink, RouterOutlet,CommonModule,MatTooltipModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  router = inject(Router);
  userData:any;
    constructor(private quoteService: DataServiceService){}
    ngOnInit() {
      this.quoteService.data$.subscribe((value) => {
        this.userData = value[0]
      console.log(this.userData)
      });
    }
 Logout(){
  this.router.navigate(['/login']);
 }
}
