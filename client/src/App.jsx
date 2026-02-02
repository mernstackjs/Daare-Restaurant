import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Menu from "./pages/menu";

export default function App() {
  return (
    <div>
      <Header />
      <main className="px-12 py-8">
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<h2>About Us</h2>} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </div>
  );
}
