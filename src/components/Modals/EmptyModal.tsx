import { ReactNode } from "react";
import ReactModal from "react-modal";

const TypedModal = ({
  children,
  isOpen,
  setIsOpen,
  className,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Function;
  className?: string;
}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      overlayClassName="Overlay"
      className={className || "Modal"}
    >
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-md shadow dark:bg-gray-800">
        {children}
      </div>
    </ReactModal>
  );
};

export default TypedModal;
