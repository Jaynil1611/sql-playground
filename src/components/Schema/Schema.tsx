import { schemas } from "../../constants/constants";
import SchemaDefinition from "./SchemaDefinition";

const Schema = () => {
  return (
    <section className="flex flex-col gap-2">
      {schemas.map((schema) => (
        <SchemaDefinition key={schema.name} schema={schema} />
      ))}
    </section>
  );
};

export default Schema;
