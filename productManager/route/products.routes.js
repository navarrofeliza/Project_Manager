const ProductsController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/product", ProductsController.getAll);
  app.get("/api/product/random/:id", ProductsController.getOne);
  app.post("/api/product/new", ProductsController.create);
  app.delete("/api/product/delete/:id", ProductsController.delete);
  app.put("/api/product/update/:id", ProductsController.update);
};
