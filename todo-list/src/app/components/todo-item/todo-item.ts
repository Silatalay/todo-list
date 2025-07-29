import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  date: string; // eklendi
}

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem { 
  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }
}

