import { FieldValues, useForm } from "react-hook-form";
import "./index.css";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 100, message: "Age must be less than 100" },
            })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
