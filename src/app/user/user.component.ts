import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { data } from '../user.json'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  displayedColumns: string[] = ['first_name', 'last_name', 'email','password','role'];
  dataSource = new MatTableDataSource(data);
  ngOnInit() {
    console.log(this.dataSource)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
