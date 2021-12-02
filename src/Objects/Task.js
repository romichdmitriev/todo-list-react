import uniqueId from 'lodash.uniqueid';

class Task {
  constructor(text) {
    this.id = uniqueId();
    this.text = text;
    this.completed = false;
  }
}

export default Task;
