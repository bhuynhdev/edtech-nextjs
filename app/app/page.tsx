import React from "react";
import styles from "./app.module.css";

interface AppProps {
  prop?: string;
}

const App: React.FC<AppProps> = ({ prop }) => {
  return (
    <div className={styles.container}>
      <div>Side bar</div>
      <div>Note editor</div>
    </div>
  );
};

export default App;
