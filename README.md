# dynamodb_toolbox_TS2742_example

With version 0.9.2 of `dynamodb-toolbox` this error is produced when attempting to produce type definitions

```
➜ tsc -b
src/entityTS.ts:4:7 - error TS2742: The inferred type of 'Customer' cannot be named without a reference to '../node_modules/dynamodb-toolbox/dist/esm/classes/Entity/types.js'. This is likely not portable. A type annotation is necessary.

4 const Customer = new Entity({
        ~~~~~~~~


Found 1 error.
```

Adding the ParseAttribute type to the exported types in the  `dynamodb-toolbox` library resolves this issue.
