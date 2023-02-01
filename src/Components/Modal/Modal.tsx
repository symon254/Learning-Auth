import React from "react";
import Style from "./ModalStyles.module.css";

interface IProps {
    title: string;
    children: JSX.Element;
    onClose: () => void;
}

export const Modal = (props: IProps) => {
    const { title, children, onClose } = props;
    return (
        <div id="myModal" className={Style.modal}>
            <div className={Style["modal-content"]}>
                <span className={Style.close} onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};
