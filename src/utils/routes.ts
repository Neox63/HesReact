import { NavContent } from "../types";

export const navDemoContent: NavContent = {
  title: "Démo",
  routes: [
    {
      title: "Enregistrement",
      link: "/register",
    },
    {
      title: "Gestion utilisateurs",
      link: "/gestion/users",
    },
  ]
};

export const navGestionContent: NavContent = {
  title: "Gestion utilisateurs",
  routes : [
    {
      title: "Liste des utilisateurs",
      link: "/gestion/users",
    },
    {
      title: "Ajouter un utilisateur",
      link: "/gestion/create",
    },
    {
      title: "Supprimer un utilisateur",
      link: "/gestion/delete",
    }
  ]
};