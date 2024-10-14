import { TodoAppComponent } from "@/components/todo-app";
import InstallPrompt from './../components/InstallPrompt';

export default function Home() {
  return (
    <div>
      <TodoAppComponent></TodoAppComponent>
      <InstallPrompt></InstallPrompt>
    </div>
  );
}
