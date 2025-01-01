import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { data } from '../Q&A Interface.json'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [MaterialModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  displayedColumns: string[] = ['questions', 'answers', 'document'];
  dataSource = new MatTableDataSource(data);
  ngOnInit() {
    console.log(this.dataSource)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
