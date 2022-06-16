import { Outlet } from "react-router-dom";
import MainWrapper from "../../components/MainWrapper";
import { Title } from "../../components/Typography";

const Gestion = () => {
  return (
    <MainWrapper>
      <Title level={1} className="mb-8 text-center">
        Page de gestion
      </Title>
      <Outlet />
    </MainWrapper>
  );
};

export default Gestion;
