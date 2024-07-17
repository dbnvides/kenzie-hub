import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { Modal } from "../../../components/Modal";
import { StyledForm, StyledTitle } from "./styled";
import { Button } from "../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "./modalSchema";
import SpanError from "../../../components/Errors";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

export const ModalRegisterTec = () => {
  const { addTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(modalSchema),
  });

  const onSubmit = (data) => {
    const newData = {
      status: data.status,
      title: data.title[0].toUpperCase() + data.title.substr(1),
    };
    addTech(newData);
  };

  return (
    <Modal>
      <StyledTitle>
        <h3>Cadastrar Tecnologia</h3>
      </StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          id={"title"}
          type={"text"}
          label={"Nome"}
          placeholder={"Digite o nome da tecnologia"}
          register={register("title")}
          classname={"input-register-tec"}
        />
        {errors.title && <SpanError>{errors.title.message}</SpanError>}
        <fieldset>
          <label htmlFor="status">Selecionar status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </fieldset>

        <Button>Cadastrar Tecnologia</Button>
      </StyledForm>
    </Modal>
  );
};
