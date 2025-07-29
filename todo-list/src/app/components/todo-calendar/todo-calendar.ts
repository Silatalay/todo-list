import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-calendar',
  imports: [CommonModule],
  templateUrl: './todo-calendar.html',
  styleUrl: './todo-calendar.css'
})
export class TodoCalendar {
  @Input() selectedDate: string = '';
  @Output() dateChange = new EventEmitter<string>();

  onDateChange(event: any) {
    this.dateChange.emit(event.target.value);
  }
}
