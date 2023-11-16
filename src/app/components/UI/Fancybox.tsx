"use client";
import React, { useRef, useEffect, ReactNode } from "react";

import { Fancybox as NativeFancybox, OptionsType } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
interface Props {
  delegate?: string;
  options?: any;
  children?: ReactNode;
  className?: string;
}
function Fancybox(props: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default Fancybox;
