export type NavRoute = {
  title: string;
  link: string;
}

export type NavContent = {
  title: string;
  routes: NavRoute[]
}

export type APIUser = {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export type HTTPMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ListElement = {
  label: string;
  className?: string;
}

export type Theme = "light" | "dark";
