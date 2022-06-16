import { APIUser } from "../../types";
import ListRow from "../ListRow";

const ListContent = ({ users }: { users: APIUser[] }) => {
  return (
    <ul className="overflow-hidden border rounded-b-lg dark:border-black">
      {users.map((user) => (
        <ListRow user={user} key={user._id} />
      ))}
    </ul>
  );
};

export default ListContent;
