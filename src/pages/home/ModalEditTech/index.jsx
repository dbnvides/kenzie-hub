import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import SpanError from "../../../components/Errors";
import { Input } from "../../../components/Input";
import { Modal } from "../../../components/Modal";
import { TechContext } from "../../../contexts/TechContext";
import { BoxButtons, StyledForm, StyledTitle } from "./styled";

export const ModalEditTech = () => {
  const { deleteTech, editDataTech, editTech } = useContext(TechContext);

  const { title, status, id } = editDataTech[0];
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setNewStatus] = useState(status);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    const newArr = {
      title: newTitle,
      status: newStatus,
    };
    editTech(id, newArr);
  };

  return (
    <Modal>
      <StyledTitle>
        <h3>Alterar Tecnologia</h3>
      </StyledTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          id={"title"}
          type={"text"}
          label={"Nome"}
          placeholder={"Digite o nome da tecnologia"}
          register={register("title")}
          classname={"input-register-tec"}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        {errors.title && <SpanError>{errors.title.message}</SpanError>}
        <fieldset>
          <label htmlFor="status">Selecionar status</label>
          <select
            name="status"
            id="status"
            {...register("status")}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </fieldset>

        <BoxButtons>
          <Button>Salvar Alterações</Button>
          <Button
            classname={"btn-edit"}
            type={"button"}
            onClick={() => deleteTech(id)}
          >
            Excluir
          </Button>
        </BoxButtons>
      </StyledForm>
    </Modal>
  );
};
