import styles from "./error.module.scss";

const Error = ({ error, clearError }) => (
  <div className={styles.errorWrapper}>
    <p className={styles.error}>{error}</p>
    <button onClick={clearError} className={styles.deleteButton}>
      X
    </button>
  </div>
);

export default Error;
