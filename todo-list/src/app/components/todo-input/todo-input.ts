import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css'
})
export class TodoInput {
  newTask: string = '';
  @Input() selectedDate: string = '';
  @Output() taskAdded = new EventEmitter<Task>();

  addTask() {
    if (this.newTask.trim() !== '' && this.selectedDate) {
      this.taskAdded.emit({
        id: Date.now(),
        title: this.newTask,
        completed: false,
        date: this.selectedDate
      });
      this.newTask = '';
    }
  }
}
