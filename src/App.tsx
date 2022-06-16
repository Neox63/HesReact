import ReactModal from "react-modal";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import { APIProvider } from "./providers/Queries";
import { ThemeProvider } from "./providers/ThemeContext";
import { API_URL } from "./utils/constant";

const App = () => {
  ReactModal.setAppElement("#root");

  return (
    <ThemeProvider initialTheme="light">
      <APIProvider api={API_URL}>
        <Router>
          <MainRouter />
        </Router>
      </APIProvider>
    </ThemeProvider>
  );
};

export default App;
