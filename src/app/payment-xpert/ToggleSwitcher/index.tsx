import React from "react";
import styles from "./style.module.scss";
import { useAppContext } from "@/app/context/AppContext";

const defaultOptions = {
  invertedIconLogic: false,
};

interface IProps {
  invertedIconLogic: boolean;
}
const ThemeToggleSwitcher = ({
  invertedIconLogic = defaultOptions.invertedIconLogic,
}: IProps) => {
  const { handleTheme, theme } = useAppContext();
  const isDark = theme === "dark";
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  const onChangeTheme = (e: React.ChangeEvent) => {
    handleTheme()
  };

  return (
    <label
      className={styles.container}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <input
        type="checkbox"
        defaultChecked={invertedIconLogic ? !isDark : isDark}
        onChange={onChangeTheme}
      />
      <div />
    </label>
  );
};

export default ThemeToggleSwitcher;
