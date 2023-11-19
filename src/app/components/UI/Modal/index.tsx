/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, forwardRef, useImperativeHandle, useState } from "react";
import classNames from "classnames";

interface Props {
  title: string;
  children: JSX.Element;
  className?: any;
}

export interface IModalMethods {
  openModal: () => void;
  closeModal: () => void;
}

const Modal = forwardRef(
  ({ title, children, className }: Props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }

    useImperativeHandle(
      ref,
      () => ({
        openModal,
        closeModal,
      }),
      []
    );

    return (
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={classNames(
                      "w-full max-w-[820px] p-4 bg-white rounded-lg flex flex-col gap-5",
                      className?.Dialog
                    )}
                  >
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  }
);

export default Modal;
