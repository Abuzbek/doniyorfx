import React, {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Modal, { IModalMethods } from "../components/UI/Modal";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";
import "../components/UI/Field/phoneInput.css";
import styles from "./styles.module.scss";
import { RegisteredService } from "../service/registered.service";
type Props = {};

const ModalForm = forwardRef((props: Props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      openModal: modalRef.current?.openModal,
      closeModal: modalRef.current?.closeModal,
    }),
    []
  );

  const modalRef = useRef<IModalMethods>();
  const [data, setData] = useState({ name: "", phone: "" });
  const [error, setError] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.phone && data.name) {
      if (data.phone && data.name.length > 3) {
        setLoading(true);
        setError((_error: any) => ({
          name: "",
          phone: "",
        }));
        var reg = /\D/g;
        // const
        await RegisteredService.create(data);
        router.push("/congratulations");
        setLoading(false);
      } else {
        if (!data.phone) {
          setError((_error: any) => ({
            ...error,
            phone: "Telefon raqamingizni to'liq kiriting",
          }));
        } else {
          setError((_error: any) => ({
            ...error,
            name: "Ismingizni to'liq kiriting",
          }));
        }
      }
    } else {
      setError({
        name: "Ismingizni kiriting",
        phone: "Telefon raqamingizni kiriting",
      });
    }
  };

  return (
    <>
      <Modal ref={modalRef} title="Ro‘xatdan o‘tish">
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="title flex items-center justify-between">
            <h3 className="text-[#222] md:text-[32px] text-xl font-bold leading-[130%]">
              Ro‘xatdan o‘tish
            </h3>
            <button
              className="text-3xl"
              onClick={() => modalRef.current?.closeModal()}
            >
              &times;
            </button>
          </div>
          <p className="text-[#222] md:text-lg font-medium leading-[130%]">
            Batafsil ma'lumotga ega bo'lish uchun ma'lumotlaringizni kiriting. Tez orada opereatorlarimiz siz bilan bog'lanadi
          </p>
          <div className="form_group grid md:grid-cols-2 gap-4">
            <div className="form_control">
              <input
                className="py-3 px-4 rounded-xl bg-[#eaeaea] text-[#232323] w-full"
                type="text"
                value={data.name}
                placeholder="Ism"
                onChange={(e) =>
                  setData((_data) => ({ ..._data, name: e.target.value }))
                }
              />
              <small className="text-red-500">{error.name}</small>
            </div>
            <div className="form_control">
              <PhoneInput
                className="py-3 px-4 rounded-xl bg-[#eaeaea] text-[#232323] w-full"
                international
                defaultCountry="UZ"
                value={data.phone}
                onChange={(e: any) => {
                  setData((_data) => ({ ..._data, phone: e }));
                }}
              />
              <small className="text-red-500">{error.phone}</small>
            </div>
          </div>
          <div className="submit_button">
            <button
              className={styles.submit_button}
              role="button"
              type="submit"
            >
              Davom etish
            </button>
          </div>
        </form>
      </Modal>
      {loading && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-24 h-24"
          >
            <path
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="currentColor"
            ></path>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
              fill="currentColor"
            ></path>
            <path
              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
});

export default ModalForm;
