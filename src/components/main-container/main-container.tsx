import styles from "./main-container.module.css";

export default function Main({
  children,
} : {
  children: React.ReactNode,
}) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
}