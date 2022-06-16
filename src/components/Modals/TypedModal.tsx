import { ReactNode } from "react";
import { EmptyModal } from ".";
import { SubTitle } from "../Typography";

type ModalType = "error" | "info" | "success" | "warning";

const types = {
  error: {
    title: "Erreur",
    icon: "fa fa-exclamation-triangle",
    color: "red-500",
    secondayColor: "red-600",
  },
  info: {
    title: "Information",
    icon: "fa fa-info-circle",
    color: "blue-500",
    secondayColor: "blue-600",
  },
  success: {
    title: "Succès",
    icon: "fa fa-check-circle",
    color: "green-500",
    secondayColor: "green-600",
  },
  warning: {
    title: "Attention",
    icon: "fa fa-exclamation-triangle",
    color: "orange-500",
    secondayColor: "orange-600",
  },
};

const TypedModal = ({
  isOpen,
  setIsOpen,
  description,
  type,
  onClose,
}: {
  isOpen: boolean;
  setIsOpen: Function;
  description: ReactNode | string;
  type: ModalType;
  onClose?: Function;
}) => {
  const currentType = types[type];

  return (
    <EmptyModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-center gap-4 p-6 text-center rounded-lg">
        <div className="flex flex-col">
          <i
            className={`${currentType.icon} text-${currentType.color} text-3xl`}
          ></i>
          <SubTitle className="text-xl">{currentType.title}</SubTitle>
        </div>

        <span className="text-center dark:text-white">{description}</span>

        <button
          className={`flex items-center justify-center w-1/2 gap-2 py-2 text-white bg-${currentType.color} rounded-md hover:bg-${currentType.secondayColor}`}
          onClick={() => {
            setIsOpen(false);
            onClose && onClose();
          }}
        >
          Fermer
        </button>
      </div>
    </EmptyModal>
  );
};

export default TypedModal;
