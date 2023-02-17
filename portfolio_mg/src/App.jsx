import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
