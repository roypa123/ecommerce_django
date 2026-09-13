import "./App.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRouter from "./routing/AppRouter";

const queryClient = new QueryClient();

function App() {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
         <AppRouter />
      </QueryClientProvider>
    </TooltipProvider>
  );
}

export default App;
