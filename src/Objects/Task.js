import getRandomId from "../utils/getRandomId";

class Task {
  constructor(text) {
    this.id = getRandomId();
    this.text = text;
    this.completed = false;
  }
}

export default Task;
