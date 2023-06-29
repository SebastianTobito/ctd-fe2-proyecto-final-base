import { PropsModal } from "./noticias.types";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
  BotonSuscribir,
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";

// apliqué el principio de responsabilidad única, extraigo la lógica del componente en distintos archivos para dividir responsabilidades.

const Modal = ({ showModal, cerrar, suscribir }: PropsModal) => {
  const esPremium = showModal?.esPremium;
  return showModal !== null ? (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={cerrar}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal
          src={esPremium ? SuscribeImage : showModal.imagen}
          alt={esPremium ? "mr-burns-excelent" : "news-image"}
        />
        <CotenedorTexto>
          <TituloModal>
            {esPremium ? "Suscribete a nuestro Newsletter" : showModal.titulo}
          </TituloModal>
          <DescripcionModal>
            {esPremium
              ? "Suscribete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
              : showModal.descripcion}
          </DescripcionModal>
          {esPremium ? (
            <BotonSuscribir onClick={suscribir}>
              Suscríbete
            </BotonSuscribir>
          ) : null}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  ) : null;
};

export default Modal;