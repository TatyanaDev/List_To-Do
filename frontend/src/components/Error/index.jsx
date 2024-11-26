import styles from "./error.module.scss";

const Error = ({ error, clearError = false }) => (
  <div className={styles.errorWrapper}>
    <p className={styles.error}>{error}</p>
    {clearError && (
      <button onClick={clearError} className={styles.deleteButton}>
        X
      </button>
    )}
  </div>
);

export default Error;
