import { Customer } from "./entityTS.js";

const runQuery = async () => {
  const customer = await Customer.put({ custId: "1", name: "name" });

  const { Items = [] } = await Customer.query("CUSTOMER#1");

  console.log(Items);
};

export { runQuery };
