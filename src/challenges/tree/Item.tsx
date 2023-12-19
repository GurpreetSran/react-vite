import { useState } from "react";
interface IData {
  filename: string;
  children?: IData[];
}

interface IItem {
  item: IData;
  depth?: number;
}

const Item: React.FC<IItem> = ({ item, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="item">
      {item.filename}
      <div>
        {item.children && (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        )}
      </div>
      {item.children &&
        item.children.map(
          (item) =>
            isExpanded && (
              <div style={{ paddingLeft: depth * 50 + "px" }}>
                <Item depth={depth + 1} item={item} />
              </div>
            )
        )}
    </div>
  );
};

export default Item;
