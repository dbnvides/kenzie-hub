import { FormRegister } from "./Form";
import { Header, Main, StyledLink } from "./styled";

export const Register = () => {
  return (
    <Main
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{
        duration: 0.2,
      }}
    >
      <Header>
        <h1>Kenzie Hub</h1>
        <StyledLink to={"/login"}>Voltar</StyledLink>
      </Header>
      <FormRegister />
    </Main>
  );
};
