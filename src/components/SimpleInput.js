import { useState } from "react";

const SimpleInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={value}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
