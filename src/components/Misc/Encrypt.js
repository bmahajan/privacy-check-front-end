import React from "react";
import { useDencrypt } from "use-dencrypt-effect";

import "./styles.css";

const values = ["PrivacyCheck™"];
const options = {
  char: ["_"], 
};
const Encrypt = () => {
  const { result, dencrypt } = useDencrypt(options);

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 0);

    return () => clearInterval(action);
  }, [0]);

  return <h2>{result}</h2>;
};

export default Encrypt;
