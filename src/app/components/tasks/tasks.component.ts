import { Component, OnInit } from '@angular/core';
import { TaskData } from '../../models/TaskData';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskData[] = [];
  inputTask: string = '';
  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'First task',
        completed: true,
      },
      {
        content: 'Second task',
        completed: false,
      },
    ];
  }

  toggleDoneTask(id: number): void {
    this.tasks.map((value, i) => {
      if (id == i) value.completed = !value.completed;
      return value;
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((value, i) => i !== id);
  }

  addTask() {
    this.tasks.push({
      content: this.inputTask,
      completed: false,
    });

    this.inputTask = '';
  }
}
