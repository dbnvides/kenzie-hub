import { useState } from "react";
import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { getLocalStorage } from "../../services/localStorage";
import { api } from "../../services/api";
import {
  MainContent,
  StyledMain,
  StyledModule,
  StyledProfile,
  StyledProfileName,
  TitleEmpty,
} from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Technology } from "../../components/Technology";
import CardTechnology from "../../components/Card";
import { TechContext } from "../../contexts/TechContext";
import { FiTrash2 } from "react-icons/fi";
import { ModalEditTech } from "./ModalEditTech";
import { ModalRegisterTec } from "./ModalRegisterTech";

export const Home = () => {
  const [dataProfile, setDataProfile] = useState([]);
  const [dataTechs, setDataTechs] = useState([]);
  const { userLogout, dataNewTech } = useContext(AuthContext);
  const { modalIsOpen, modalEditIsOpen, deleteTech } = useContext(TechContext);

  const userId = getLocalStorage("@USERID");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        setDataProfile(response.data);
        setDataTechs([...response.data.techs]);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [dataNewTech]);

  return (
    <StyledMain
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      transition={{
        duration: 0.2,
      }}
    >
      {modalIsOpen && <ModalRegisterTec />}
      {modalEditIsOpen && <ModalEditTech />}

      <Navbar>
        <h1>Kenzie Hub</h1>
        <button onClick={() => userLogout()}>Sair</button>
      </Navbar>
      <StyledProfile>
        <Container>
          <div className="boxProfile">
            <StyledProfileName>
              <h2>Olá, {dataProfile.name}</h2>
            </StyledProfileName>
            <StyledModule>{dataProfile.course_module}</StyledModule>
          </div>
        </Container>
      </StyledProfile>
      <main>
        <Container>
          <MainContent>
            <Technology>
              {dataTechs.length > 0 ? (
                dataTechs.map((el) => {
                  return (
                    <CardTechnology
                      key={el.id}
                      id={el.id}
                      tecName={el.title}
                      level={el.status}
                    >
                      <button onClick={() => deleteTech(el.id)}>
                        <FiTrash2 />
                      </button>
                    </CardTechnology>
                  );
                })
              ) : (
                <TitleEmpty>Sem tecnologia :(</TitleEmpty>
              )}
            </Technology>
          </MainContent>
        </Container>
      </main>
    </StyledMain>
  );
};
