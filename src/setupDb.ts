import { Table } from "dynamodb-toolbox";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const isTest = process.env.JEST_WORKER_ID;
const marshallOptions = {
  // Specify your client options as usual
  convertEmptyValues: true,
};

const translateConfig = { marshallOptions };

const DocumentClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    ...(isTest && {
      endpoint: "http://localhost:9000",
      sslEnabled: false,
      region: "local-env",
      credentials: {
        accessKeyId: "fakeMyKeyId",
        secretAccessKey: "fakeSecretAccessKey",
      },
    }),
  }),
  translateConfig
);

const tableAttributes = {
  // Specify table name (used by DynamoDB)
  name: process.env.DB_NAME || "TEST-TABLE",
  // Define partition and sort keys
  partitionKey: "pk",
  sortKey: "sk",

  // Add the indexes
  indexes: {
    GSI1: { partitionKey: "GSI1PK", sortKey: "GSI1SK" },
    GSI2: { partitionKey: "GSI2PK", sortKey: "GSI2SK" },
    GSI3: { partitionKey: "GSI3PK", sortKey: "GSI3SK" },
  },
};
// Instantiate a table
const dBTable = new Table({
  ...tableAttributes,

  // Add the DocumentClient
  DocumentClient,
});

export { dBTable };
