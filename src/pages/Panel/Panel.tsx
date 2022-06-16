import { Outlet } from "react-router-dom";
import MainWrapper from "../../components/MainWrapper";
import { Title } from "../../components/Typography";

const Panel = () => {
  return (
    <MainWrapper>
      <Title level={1} className="my-8 text-center">
        Accueil
      </Title>
      <Outlet />
    </MainWrapper>
  );
};

export default Panel;
