import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { StyledLink } from "./styled";
import { Form } from "../../../components/Form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../loginSchema";
import SpanError from "../../../components/Errors";
import { AuthContext } from "../../../contexts/AuthContext";

export const FormLogin = () => {
  const { userLogin, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    userLogin(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input
        type="email"
        placeholder="Digite seu email aqui"
        label="Email"
        id="email"
        register={register("email")}
      />
      {errors.email && <SpanError>{errors.email.message}</SpanError>}
      <Input
        type="password"
        placeholder="Digite sua senha aqui"
        label="Senha"
        id="password"
        register={register("password")}
      />
      {errors.password && <SpanError>{errors.password.message}</SpanError>}
      <div>
        <Button type="submit" disable={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </div>
      <p>Ainda não possui uma conta?</p>
      <StyledLink to="/register">Cadastra-se</StyledLink>
    </Form>
  );
};
