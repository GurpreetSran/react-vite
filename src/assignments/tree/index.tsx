import Item from "./Item";
import "./index.css";

const data = [
  {
    filename: "myfile1",
  },
  {
    filename: "folder",
    children: [
      {
        filename: "file5",
      },
    ],
  },
  {
    filename: "file2",
  },
  {
    filename: "more-folders",
    children: [
      {
        filename: "file4",
      },
      {
        filename: "file5",
        children: [
          {
            filename: "file5",
          },
        ],
      },
    ],
  },
];

const Tree = () => {
  return (
    <div className="container">
      <ul>
        {data.map((file) => {
          return <Item item={file} depth={1} />;
        })}
      </ul>
    </div>
  );
};

export default Tree;
