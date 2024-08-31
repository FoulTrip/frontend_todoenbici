import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getLocaleFromLanguage } from "../handlers/GetLocation";

function ChangeLen() {
  const [locale, setLocale] = useState("");

  const handleChangeLocation = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocation = event.target.value;
    setLocale(newLocation);
  };

  useEffect(() => {
    const userLanguage = window.navigator.language;
    const localiceValue = getLocaleFromLanguage(userLanguage);
    setLocale(localiceValue);
  });

  return (
    <>
      <div className={styles.subAccount}>
        <select
          defaultValue={locale}
          onChange={handleChangeLocation}
          className={styles.selectLenguage}
        >
          <option selected={locale == "es" ? true : false} value="es">
            Español
          </option>
          <option selected={locale == "pt" ? true : false} value="pt">
            Portugues
          </option>
        </select>
      </div>
    </>
  );
}

export default ChangeLen;
