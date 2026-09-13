import "./App.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <TooltipProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={() => alert("Clicked!")}>Click me</Button>
    </TooltipProvider>
  );
}

export default App;
