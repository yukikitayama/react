class Task {
  id: string;
  project: string;
  task: string;
  priority: string;
  startDate: string;
  dueDate: string;
  labels: string[];

  constructor(
    id: string,
    project: string,
    task: string,
    priority: string,
    startDate: string,
    dueDate: string,
    labels: string[]
  ) {
    this.id = id;
    this.project = project;
    this.task = task;
    this.priority = priority;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.labels = labels;
  }
}

export default Task;
