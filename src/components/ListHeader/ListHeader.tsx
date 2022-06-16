import { ListElement } from "../../types";

const ListHeader = ({ elements }: { elements: ListElement[] }) => {
  return (
    <div className="flex px-6 py-4 bg-purple-500 border rounded-t-lg dark:border-black">
      {elements.map((element, index) => (
        <span
          key={index}
          className={`w-1/5 font-bold text-white ${element.className}`}
        >
          {element.label}
        </span>
      ))}
    </div>
  );
};

export default ListHeader;
