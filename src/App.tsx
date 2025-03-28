import { default as Form } from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import { default as validator } from "@rjsf/validator-ajv8";
import "./App.css";

const schema: RJSFSchema = {
  title: "Test form",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
};

function App() {
  return (
    <div>
      <Form schema={schema} validator={validator} />
    </div>
  );
}

export default App;
