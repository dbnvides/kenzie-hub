import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FormLogin } from "./Form";
import { Main } from "./styled";
export const Login = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <Main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{
        duration: 0.2,
      }}
    >
      <h1>Kenzie Hub</h1>
      <FormLogin setUser={setUser} />
    </Main>
  );
};
