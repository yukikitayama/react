class Task {

  constructor(
    public id: string,
    public project: string,
    public task: string,
    public priority: string,
    public startDate: string,
    public dueDate: string,
    public labels: string[],
    public status: string
  ) {
    // this.id = id;
    // this.project = project;
    // this.task = task;
    // this.priority = priority;
    // this.startDate = startDate;
    // this.dueDate = dueDate;
    // this.labels = labels;
    // this.status = status;
  }
}

export default Task;
