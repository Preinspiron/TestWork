import { Dna } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loaderStyled}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
