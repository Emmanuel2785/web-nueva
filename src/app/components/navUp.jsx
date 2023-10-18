import { connectDB } from "@/utils/mogoose";
import Task from "@/models/Task";

async function loadTasks() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

async function homePage() {
  const tasks = await loadTasks();
  return <div>{JSON.stringify(tasks)}</div>;
}
export default homePage;
