import React from "react";
import { useTranslations } from "next-intl";

function InterNac() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div>
        <h1>{t("title")}</h1>
      </div>
    </>
  );
}

export default InterNac;
