import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { getLocalStorage } from "../services/localStorage";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editDataTech, setEditDataTech] = useState([]);
  const { setDataNewTech } = useContext(AuthContext);
  const token = getLocalStorage("@TOKEN");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalEditIsOpen(false);
  };

  const addTech = async (formData) => {
    try {
      setLoading(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.post("/users/techs", formData);
      setDataNewTech(formData);
      toast.success("Cadastro realizado com sucesso!");
      setIsOpen(false);
    } catch (error) {
      const errorName = error.response.data.message;
      if (
        errorName ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Nome de tecnologia ja criado");
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (id) => {
    try {
      setLoading(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await api.delete(`/users/techs/${id}`);
      setDataNewTech([]);
      toast.success("Tecnologia deletada com sucesso!");
      setModalEditIsOpen(false);
      setIsOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const setEditTech = async (id, title, status) => {
    const newData = [
      {
        id: id,
        title: title,
        status: status,
      },
    ];
    setEditDataTech([...newData]);
    setModalEditIsOpen(true);
  };

  const editTech = async (id, formData) => {
    try {
      setLoading(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.put(`/users/techs/${id}`, formData);
      setDataNewTech([]);
      toast.success("Tecnologia alterado com sucesso!");
      setModalEditIsOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        setIsOpen,
        modalIsOpen,
        closeModal,
        openModal,
        addTech,
        deleteTech,
        setEditTech,
        editTech,
        modalEditIsOpen,
        editDataTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
