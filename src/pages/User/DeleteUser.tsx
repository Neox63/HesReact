import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { TypedModal } from "../../components/Modals";

import { SubTitle } from "../../components/Typography";
import useQueryParams from "../../hooks/useQueryParams";
import { API_URL } from "../../utils/constant";

const DeleteUser = () => {
  const params = useQueryParams();
  const navigate = useNavigate();

  const [userEmail] = useState(params.get("email") || "");
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .delete(`${API_URL}/users/${data.email}`, {
        method: "DELETE",
      })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          setDisplaySuccessModal(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setDisplayErrorModal(true);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TypedModal
        isOpen={displaySuccessModal}
        setIsOpen={setDisplaySuccessModal}
        type="success"
        description="L'utilisateur a bien été supprimé de la liste"
        onClose={() => navigate("/gestion/users")}
      />

      <TypedModal
        isOpen={displayErrorModal}
        setIsOpen={setDisplayErrorModal}
        type="error"
        description="L'utilisateur n'a pas pu être supprimé de la liste"
      />
      <Layout className="items-center justify-center w-1/2 mx-auto">
        <SubTitle>Supprimer un utilisateur</SubTitle>
        <div className="w-full">
          <Input
            defaultValue={userEmail}
            label="Entrez l'adresse email de l'utilisateur à supprimer"
            placeholder="Email"
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email?.type === "required" && (
            <span className="block text-right text-red-500">
              Ce champs est requis
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="block text-right text-red-500">
              L'email est invalide
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-1/2 px-4 py-2 text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-600"
        >
          Supprimer l'utilisateur
        </button>
      </Layout>
    </form>
  );
};

export default DeleteUser;
