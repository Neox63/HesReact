import { useState } from "react";
import { Link } from "react-router-dom";
import { APIUser } from "../../types";
import { EditUserModal, EmptyModal } from "../Modals";
import { SubTitle } from "../Typography";

const ListRow = ({ user }: { user: APIUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <EditUserModal
        user={user}
        isOpen={showEditModal}
        setIsOpen={setShowEditModal}
      />
      <EmptyModal isOpen={showDetails} setIsOpen={setShowDetails}>
        <div className="flex flex-col text-center">
          <i className="text-4xl text-blue-500 fa fa-user-circle"></i>
          <span className="my-4 text-gray-400">ID : {user._id}</span>
          <SubTitle>
            {user.firstname} {user.lastname}
          </SubTitle>
          <a
            className="font-semibold text-purple-500 hover:text-purple-600"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </a>
        </div>
      </EmptyModal>
      <li
        key={user._id}
        className="flex items-center w-full gap-4 px-6 py-4 transition duration-150 border-b border-gray-300 dark:text-white dark:border-black odd:bg-gray-100 dark:bg-gray-900"
      >
        <a
          className="w-1/5 overflow-scroll font-semibold text-purple-500 sm:overflow-auto hover:text-purple-600"
          href={`mailto:${user.email}`}
        >
          {user.email}
        </a>
        <span className="w-1/5">{user.firstname}</span>
        <span className="w-1/5">{user.lastname}</span>
        <span className="flex items-center w-1/5 gap-3">
          <i
            onClick={(e) => {
              e.stopPropagation();
              setShowPassword(!showPassword);
            }}
            className={`cursor-pointer text-purple-500 hover:text-purple-600 fas fa-eye${
              showPassword ? "-slash" : ""
            }`}
          ></i>
          {showPassword ? user.password : "*".repeat(8)}
        </span>
        <div className="flex justify-end w-1/5 gap-2">
          <button
            onClick={(e) => {
              setShowEditModal(!showEditModal);
            }}
          >
            <i className="p-2 text-white transition duration-300 bg-blue-400 rounded-md fa fa-pen hover:bg-blue-500"></i>
          </button>
          <Link to={`/gestion/delete?email=${user.email}`}>
            <i className="p-2 text-white transition duration-300 bg-red-500 rounded-md fa fa-trash hover:bg-red-600"></i>
          </Link>
          <button onClick={() => setShowDetails(!showDetails)}>
            <i className="p-2 text-white transition duration-300 bg-green-400 rounded-md fas fa-ellipsis hover:bg-green-500"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default ListRow;
