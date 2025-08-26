import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home/Home";

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent