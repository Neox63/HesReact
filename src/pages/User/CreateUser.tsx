import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import { TypedModal } from "../../components/Modals";
import { SubTitle } from "../../components/Typography";
import { API_URL } from "../../utils/constant";

const CreateUser = () => {
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post(`${API_URL}/users`, data)
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
    <Layout className="items-center justify-center w-1/2 mx-auto">
      <TypedModal
        isOpen={displaySuccessModal}
        setIsOpen={setDisplaySuccessModal}
        type="success"
        description="L'utilisateur a bien été ajouté dans la liste"
        onClose={() => navigate("/gestion/users")}
      />

      <TypedModal
        isOpen={displayErrorModal}
        setIsOpen={setDisplayErrorModal}
        type="error"
        description="L'utilisateur n'a pas pu être ajouté dans la liste"
      />

      <SubTitle>Créer un utilisateur</SubTitle>
      <form
        className="flex flex-col w-full gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="Input-wrapper">
          <Input
            label="Prénom"
            placeholder="Entrez votre prénom"
            {...register("firstname", {
              required: true,
              minLength: 3,
              maxLength: 45,
            })}
          />
          {errors.firstname?.type === "required" && (
            <span className="block text-right text-red-500">
              Ce champs est requis
            </span>
          )}
          {errors.firstname?.type === "minLength" && (
            <span className="block text-right text-red-500">
              Le champs doit comporter au minimum 3 charactères
            </span>
          )}
          {errors.firstname?.type === "maxLength" && (
            <span className="block text-right text-red-500">
              Le champs doit comporter au minimum 45 charactères
            </span>
          )}
        </div>

        <div className="Input-wrapper">
          <Input
            label="Nom"
            placeholder="Entrez votre nom"
            {...register("lastname", {
              required: true,
              minLength: 3,
              maxLength: 45,
            })}
          />
          {errors.lastname?.type === "required" && (
            <span className="block text-right text-red-500">
              Ce champs est requis
            </span>
          )}
          {errors.lastname?.type === "minLength" && (
            <span className="block text-right text-red-500">
              Le champs doit comporter au minimum 3 charactères
            </span>
          )}
          {errors.lastname?.type === "maxLength" && (
            <span className="block text-right text-red-500">
              Le champs doit comporter au minimum 45 charactères
            </span>
          )}
        </div>

        <div className="Input-wrapper">
          <Input
            label="Email"
            placeholder="Entrez votre adresse email"
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

        <div className="Input-wrapper">
          <Input
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            type={showPassword ? "text" : "password"}
            iconAlignment="right"
            icon={
              <i
                className={`cursor-pointer fas fa-eye${
                  showPassword ? "-slash" : ""
                } hover:text-purple-500`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            }
            {...register("password", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="block text-right text-red-500">
              Ce champs est requis
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="block text-right text-red-500">
              Le champs doit comporter au minimum 5 charactères
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-1/2 px-4 py-2 mx-auto text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-600"
        >
          Créer l'utilisateur
        </button>
      </form>
    </Layout>
  );
};

export default CreateUser;
