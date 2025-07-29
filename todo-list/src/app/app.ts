import { Component, signal } from '@angular/core';
import { TodoItem, Task } from './components/todo-item/todo-item';
import { TodoInput } from './components/todo-input/todo-input';
import { TodoCalendar } from './components/todo-calendar/todo-calendar';

@Component({
  selector: 'app-root',
  imports: [TodoItem, TodoInput, TodoCalendar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list');

  tasks: Task[] = [];
  selectedDate: string = '';

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  onDateChange(date: string) {
    this.selectedDate = date;
  }

  get filteredTasks(): Task[] {
    if (!this.selectedDate) return this.tasks;
    return this.tasks.filter(task => task.date === this.selectedDate);
  }
}
