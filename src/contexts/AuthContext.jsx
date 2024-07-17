import { createContext, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataNewTech, setDataNewTech] = useState([]);
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      setUser(response.data.user);
      setLocalStorage("@USERID", response.data.user.id);
      setLocalStorage("@TOKEN", response.data.token);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha incorreta!");
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    const loadUser = async () => {
      const token = getLocalStorage("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        toast.error("Usuario deslogado!");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        setUser,
        user,
        loading,
        userLogout,
        setLoading,
        setDataNewTech,
        dataNewTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
