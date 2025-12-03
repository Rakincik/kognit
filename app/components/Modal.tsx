// app/components/Modal.tsx

export type ModalData = {
  id: string;
  title: string;
  desc: string;
  details: string[];
};

type ModalProps = {
  data: ModalData;
  close: () => void;
};

const Modal = ({ data, close }: ModalProps) => {
  const whatsapp =
    "https://wa.me/905555555555?text=Kognita%20programı%20hakkında%20bilgi%20almak%20istiyorum.";

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <ul>
          {data.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <a href={whatsapp} className="btn-primary">
          WhatsApp’tan Bilgi Al
        </a>
      </div>
    </div>
  );
};

export default Modal;
