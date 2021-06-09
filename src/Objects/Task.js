import _ from 'lodash';

class Task {
  constructor(text) {
    this.id = _.uniqueId();
    this.text = text;
    this.completed = false;
  }
}

export default Task;
