import api from "../api/axios";

export default function Menu() {
  const getMenu = async () => {
    const res = await api.get("/api/menu");
    console.log(res.data);
  };
  return (
    <div>
      <h2>Menu Page</h2>
      <button className="text-red-600 underline" onClick={getMenu}>
        Get Menu
      </button>
    </div>
  );
}
