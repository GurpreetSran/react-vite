import { useState } from "react";
import "./index.css";

const listA = [
  { label: "1", isChecked: false },
  { label: "2", isChecked: true },
];
const listB = [
  { label: "3", isChecked: true },
  { label: "4", isChecked: true },
];

type Item = {
  label: string;
  isChecked: boolean;
};

interface IITem {
  item: Item;
  listName: string;
  onCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    listName: string,
    identifier: string
  ) => void;
}

const ListItem: React.FC<IITem> = ({ item, onCheckboxChange, listName }) => {
  return (
    <div>
      <label>{item.label}</label>{" "}
      <input
        onChange={(event) => onCheckboxChange(event, listName, item.label)}
        checked={item.isChecked}
        key={item.label}
        type="checkbox"
      />
    </div>
  );
};

const TransferList = () => {
  const [listAItems, setListAItems] = useState(listA);
  const [listBItems, setListBItems] = useState(listB);

  const onCheckBoxUpdate = (
    _event: React.ChangeEvent<HTMLInputElement>,
    list: string,
    identifier: string
  ) => {
    if (list === "a") {
      const itemIndex = listAItems.findIndex(
        (item) => item.label === identifier
      );

      if (listAItems[itemIndex].isChecked) {
        listAItems[itemIndex].isChecked = false;
      } else {
        listAItems[itemIndex].isChecked = true;
      }

      setListAItems([...listAItems]);
    }

    if (list === "b") {
      const itemIndex = listBItems.findIndex(
        (item) => item.label === identifier
      );

      if (listBItems[itemIndex].isChecked) {
        listBItems[itemIndex].isChecked = false;
      } else {
        listBItems[itemIndex].isChecked = true;
      }

      setListBItems([...listBItems]);
    }
  };

  const onRightMove = () => {
    const selected = listAItems.filter((item) => item.isChecked);
    const unselected = listAItems.filter((item) => !item.isChecked);
    setListBItems([...listBItems, ...selected]);
    setListAItems([...unselected]);
  };

  const onLeftMove = () => {
    const selected = listBItems.filter((item) => item.isChecked);
    const unselected = listBItems.filter((item) => !item.isChecked);
    setListAItems([...listAItems, ...selected]);
    setListBItems([...unselected]);
  };

  return (
    <div className="root">
      <div className="listA">
        List A
        {listAItems.map((item) => {
          return (
            <ListItem
              key={item.label}
              listName={"a"}
              onCheckboxChange={onCheckBoxUpdate}
              item={item}
            />
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={() => onRightMove()}>Move Right</button>
        <button onClick={() => onLeftMove()}>Move Left</button>
      </div>

      <div className="listA">
        List B
        {listBItems.map((item) => {
          return (
            <ListItem
              key={item.label}
              listName={"b"}
              onCheckboxChange={onCheckBoxUpdate}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransferList;
