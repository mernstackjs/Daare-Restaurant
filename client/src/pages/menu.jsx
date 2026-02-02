import { useState } from "react";
import api from "../api/axios";

import { useEffect } from "react";

export default function Menu() {
  const [MenuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      setLoading(true);
      const res = await api.get("/api/menu");
      setMenuItems(res.data.menu);
      setLoading(false);
    };
    getMenu();
  }, []);

  return (
    <div>
      <h2>Menu Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid md:grid-cols-3 gap-4">
          {MenuItems.map((item) => (
            <li className="border p-4" key={item.id}>
              {item.name} - ${item.price}
              <button className="ml-4 px-2 py-1 bg-blue-500 text-white rounded">
                Order Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
