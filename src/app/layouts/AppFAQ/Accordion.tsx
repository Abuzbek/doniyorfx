"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Plus from "./Plus";
type Props = {
  header_text: string;
  body_text: string;
};

const Accordion = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((open) => !open);
  return (
    <div className={styles.accordion_card}>
      <div onClick={handleOpen} className={styles.accordion_header}>
        {props.header_text}
        <Plus />
      </div>
      {open && <div className={styles.accordion_body}>{props.body_text}</div>}
    </div>
  );
};

export default Accordion;
