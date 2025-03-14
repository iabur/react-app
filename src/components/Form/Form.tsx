import { FormEvent, useRef } from "react";
import "./index.css";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current?.value, ageRef.current?.value);
    person.name = nameRef.current?.value || "";
    person.age = parseInt(ageRef.current?.value || "0");
    console.log(person);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" ref={ageRef} className="form-control" id="age" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
