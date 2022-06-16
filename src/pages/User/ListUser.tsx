import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { SubTitle } from "../../components/Typography";
import { useUsers } from "../../hooks/queries";
import { APIUser } from "../../types";

const ListUser = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isError, isLoading } = useUsers("/users");

  return (
    <Layout className="w-5/6 mx-auto">
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-4">
          <SubTitle>Récupération des utilisateurs en cours...</SubTitle>
          <i className="text-3xl text-center text-purple-500 fa fa-circle-notch fa-spin"></i>
        </div>
      )}
      {isError && (
        <div className="flex flex-col items-center justify-center gap-4">
          <i className="text-3xl text-center text-red-500 fa fa-exclamation-triangle"></i>
          <span className="text-red-500">
            Oops, on dirait qu'il y'a une erreur, veuillez réessayer plus tard !
          </span>
        </div>
      )}
      {data && (
        <>
          <div className="flex items-center justify-between">
            <SubTitle>Liste des utilisateurs ({data.users.length})</SubTitle>
            <div className="flex gap-2">
              <Link
                to={`/gestion/create`}
                className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-600"
              >
                <i className="fa fa-plus"></i>
                <span className="hidden sm:block">Créer un utilisateur</span>
              </Link>
            </div>
          </div>

          <div className="sm:w-2/6">
            <Input
              value={searchQuery}
              onChange={({ target: { value } }) => setSearchQuery(value)}
              label="Rechercher par email"
              placeholder="Email"
            />
          </div>

          {data.users.filter((user: APIUser) =>
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 ? (
            <div className="text-center dark:text-white">
              Aucun utilisateur trouvé{" "}
              {searchQuery && (
                <span>
                  pour "
                  <span className="font-bold text-purple-500">
                    {searchQuery}
                  </span>
                  "
                </span>
              )}
            </div>
          ) : (
            <List
              headerTitles={[
                { label: "Email" },
                { label: "Prénom" },
                { label: "Nom" },
                { label: "Mot de passe" },
                { label: "Actions", className: "text-right" },
              ]}
              elements={data.users.filter((user: APIUser) =>
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
              )}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default ListUser;
