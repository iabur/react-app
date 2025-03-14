import { FormEvent, useState } from "react";
import "./index.css";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    setPerson({
      name: (formData.get("name") as string) || "",
      age: parseInt((formData.get("age") as string) || "0"),
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={person.age}
            onChange={(e) =>
              setPerson({ ...person, age: parseInt(e.target.value) || 0 })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
