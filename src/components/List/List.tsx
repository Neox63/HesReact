import { APIUser, ListElement } from "../../types";
import ListContent from "../ListContent";
import ListHeader from "../ListHeader";

const List = ({
  headerTitles,
  elements,
}: {
  headerTitles: ListElement[];
  elements: APIUser[];
}) => {
  return (
    <div>
      <ListHeader elements={headerTitles} />
      <ListContent users={elements} />
    </div>
  );
};

export default List;
