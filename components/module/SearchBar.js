import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button> */}
    </div>
  );
}

export default SearchBar;
