import { theme } from "antd";
import { useEffect } from "react";

const { useToken } = theme;

export const Colors = () => {
  const { token } = useToken();

  useEffect(() => {
    document.body.style.setProperty("--PRIMARY", token.colorPrimary);
    document.body.style.setProperty("--SECONDARY", token.colorSecondary);
    document.body.style.setProperty("--ERROR", token["red-6"]);
    document.body.style.setProperty("--DELETE", token["red-6"]);
    document.body.style.setProperty("--WARNING", token.colorSecondary);
    document.body.style.setProperty("--SUCESS", token["green-6"]);
    document.body.style.setProperty("--WHITE", token.colorWhite);
    document.body.style.setProperty("--TITLE", `${token.fontSizeXL}px`);
    document.body.style.setProperty("--FONT", token.fontFamily);
    document.body.style.setProperty("--FONT-BOLD", `${token.fontFamily}-Bold`);
    document.body.style.setProperty(
      "--FONT-SEMIBOLD",
      `${token.fontFamily}-SemiBold`,
    );
    document.body.style.setProperty(
      "--FONT-LIGHT",
      `${token.fontFamily}-Light`,
    );
  }, [token.colorPrimary]);

  return <></>;
};
