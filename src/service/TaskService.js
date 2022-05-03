import { uid } from 'uid';

class Task {
  constructor(text) {
    this.id = uid();
    this.text = text;
    this.completed = false;
  }
}

export default function createTask(text) {
  return new Task(text);
}
