import { Entity, Table, EntityItem } from "dynamodb-toolbox";
import { dBTable } from "./setupDb.js";

const Customer = new Entity({
  name: "Customer",
  table: dBTable,
  attributes: {
    custId: { partitionKey: true, prefix: "CUSTOMER#" },
    sk: {
      sortKey: true,
      default: (data: { custId: string }) => `CUSTOMER#${data.custId}`,
    },
    name: { type: "string" },
    age: { type: "number" },
    email: { type: "string" },
  },
} as const);

export { Customer };
export type Customer = EntityItem<typeof Customer>;
