import styles from "./container.module.css";

export default function Container({
  style,
  children,
} : {
  style?: React.CSSProperties,
  children: React.ReactNode,
}) {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
}