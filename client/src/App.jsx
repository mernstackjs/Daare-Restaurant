import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <h1>Welcome to Daare Restaurant</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Us</h2>} />
        <Route path="/menu" element={<h2>Our Menu</h2>} />
      </Routes>
    </div>
  );
}
