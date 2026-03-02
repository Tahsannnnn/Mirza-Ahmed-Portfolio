import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Router as WouterRouter } from "wouter"; // 1. Rename the import to avoid conflict
// ... your other imports

function Router() {
  return (
    // 2. Wrap Switch in WouterRouter with the base path
    <WouterRouter base="/Mirza-Ahmed-Portfolio"> 
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// ... rest of your App() function stays the same

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
