import { ReactNode, useEffect, useState } from "react";
import useResize from "../../hooks/useResize";
import { TypedModal } from "../Modals";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const { width } = useResize();

  useEffect(() => {
    if (width < 768) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [width]);

  return (
    <main className="p-8">
      <TypedModal
        type="info"
        description="App is not responsive yet !"
        isOpen={showModal}
        setIsOpen={setShowModal}
      />
      {children}
    </main>
  );
};

export default MainWrapper;
