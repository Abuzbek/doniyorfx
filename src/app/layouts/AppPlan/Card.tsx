import React, { MutableRefObject } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { IModalMethods } from "@/app/components/UI/Modal";
type Props = {
  name: string;
  color: string;
  textColor: string;
  advantages: { text: string; new: boolean }[];
  price: string;
  href: string;
  modalRef: MutableRefObject<IModalMethods | undefined>;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.up}>
        <div
          className={styles.plan_type}
          style={{ backgroundColor: props.color }}
        >
          {props.name}
        </div>
        <ul>
          {props.advantages.map((n, i) => (
            <li key={i} className={n.new ? "" : "opacity-60"}>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.down}>
        <button 
          onClick={() => window.location.href = 'https://payment.doniyorfx.uz/'} 
          style={{ backgroundColor: props.color }}>
          Batafsil ma'lumot olish
        </button>
      </div>
    </div>
  );
};

export default Card;
