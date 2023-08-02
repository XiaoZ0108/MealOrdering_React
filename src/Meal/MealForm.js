import classes from "./MealForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

const MealForm = (props) => {
  const inputRef = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const quan = Number(inputRef.current.value);

    if (quan === 0 || quan < 1 || quan > 5) {
      return;
    }

    props.addquan(quan);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandle}>
        <Input
          ref={inputRef}
          label={"Amount"}
          input={{
            id: props.id,
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
          }}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default MealForm;
