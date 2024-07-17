import { AuthProvider } from "./contexts/AuthContext";
import TechProvider from "./contexts/TechContext";
import { RoutesMain as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};
