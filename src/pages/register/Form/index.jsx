import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../registerSchema";
import { useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SpanError from "../../../components/Errors";
import { StyledForm } from "./styled";

export const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.response.data.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    await userRegister(formData);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Crie sua conta</h2>
      <p>Rapido e grátis, vamos nessa</p>
      <div className="boxForm">
        <div className="boxRight">
          <Input
            type="text"
            placeholder="Digite seu nome aqui"
            label="Nome"
            id="name"
            register={register("name")}
          />
          {errors.name && <SpanError>{errors.name.message}</SpanError>}
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
          <Input
            type="password"
            placeholder="Confirme sua senha aqui"
            label="Confirmar Senha"
            id="validatePassword"
            register={register("validatePassword")}
          />
          {errors.validatePassword && (
            <SpanError>{errors.validatePassword.message}</SpanError>
          )}
        </div>
        <div className="boxLeft">
          <Input
            type="text"
            placeholder="Fale sobre você"
            label="Bio"
            id="bio"
            register={register("bio")}
          />
          {errors.bio && <SpanError>{errors.bio.message}</SpanError>}
          <Input
            placeholder="Opção de contato"
            label="Contato"
            id="contact"
            register={register("contact")}
          />
          {errors.contact && <SpanError>{errors.contact.message}</SpanError>}
          <fieldset>
            <label>Selecionar módulo</label>
            <select id="course_module" {...register("course_module")}>
              <option value="">Módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Módulo 1
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Módulo 2
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Módulo 3
              </option>
              <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
            </select>
            {errors.course_module && (
              <SpanError>{errors.course_module.message}</SpanError>
            )}
          </fieldset>

          <Button disable={loading}>Cadastrar</Button>
        </div>
      </div>
    </StyledForm>
  );
};
