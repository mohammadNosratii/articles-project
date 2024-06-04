import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Modules/Navbar/Navbar";

function App() {
  const router = useRoutes(routes);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div dir="rtl">
      <QueryClientProvider client={client}>
        <Navbar />
        <div>{router}</div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
