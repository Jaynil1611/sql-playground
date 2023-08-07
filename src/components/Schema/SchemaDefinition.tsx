import { useState } from "react";
import ExpandArrowIcon from "../../assets/icons/expand.png";
import CollapseArrowIcon from "../../assets/icons/collapse.png";
import TableIcon from "../../assets/icons/table.png";

const SchemaDefinition = ({ schema }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSchemaToggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <div className="flex gap-1 items-center cursor-pointer" onClick={handleSchemaToggle}>
        <img src={TableIcon} alt="" height="16px" width="16px" />
        <span>{schema.name}</span>
        <img
          src={isOpen ? CollapseArrowIcon : ExpandArrowIcon}
          alt=""
          className="m-auto mr-4"
          height="16px"
          width="16px"
        />
      </div>
      {isOpen ? (
        <div className="pl-4 gap-2 my-2 flex flex-col">
          {Object.entries(schema.definition).map(([columnName, type]) => (
            <div className="flex gap-2">
              <span>-</span>
              <span className="font-semibold">{columnName}</span>
              <span>({String(type)})</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SchemaDefinition;
