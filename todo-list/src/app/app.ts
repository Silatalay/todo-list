import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './components/todo-item/todo-item';
import { TodoInput } from './components/todo-input/todo-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoItem,TodoInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list');
}
