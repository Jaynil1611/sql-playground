export const pageSizes = [5, 10, 20];

export const queries = [
  { name: "customers", query: "select * from customers" },
  { name: "products", query: "select * from products" },
  { name: "suppliers", query: "select * from suppliers" },
];

export const defaultQuery = queries[0].query;

export const customerSchema = {
  customerId: "string",
  companyName: "string",
  contactName: "string",
  contactTitle: "string",
  address: "string",
  city: "string",
  region: "string",
  postalCode: "integer",
  country: "string",
  phone: "string",
  fax: "string",
};

export const productSchema = {
  productId: "integer",
  productName: "string",
  supplierID: "integer",
  categoryID: "integer",
  quantityPerUnit: "string",
  unitPrice: "integer",
  unitsInStock: "integer",
  unitsOnOrder: "integer",
  reorderLevel: "integer",
  discontinued: "integer",
};

export const supplierSchema = {
  supplierID: "integer",
  companyName: "string",
  contactName: "string",
  contactTitle: "string",
  address: "string",
  city: "string",
  region: "string",
  postalCode: "string",
  country: "string",
  phone: "string",
  fax: "string",
  homePage: "string",
};

export const schemas = [
  { name: "customers", definition: customerSchema },
  { name: "products", definition: productSchema },
  { name: "suppliers", definition: supplierSchema },
];
