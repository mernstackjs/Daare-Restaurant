import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    menu: [
      { id: 1, name: "Spaghetti Bolognese", price: 12.99 },
      { id: 2, name: "Margherita Pizza", price: 10.99 },
      { id: 3, name: "Caesar Salad", price: 8.99 },
    ],
  });
});

export default router;
