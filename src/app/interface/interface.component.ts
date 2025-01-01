import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';
import {data} from '../Ingestion.json'
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [MaterialModule,MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css',
  providers:[AppService]
})

export class InterfaceComponent {
constructor(private appService: AppService, private http: HttpClient){}
  displayedColumns: string[] = ['ingestionId', 'dataProcessed', 'source', 'startTime', 'endTime'];
  dataSource = new MatTableDataSource(data);
  posts:any;
  ngOnInit() {
    // this.appService.getPIngestion().subscribe((data:any)=>{
      console.log(data)
    // }
    // );
    // this.http.get('http://your-backend-api.com/Ingestion.json').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.error('Error:', err);
    //   },
    // });
}
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
