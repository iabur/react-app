import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ExpenseFormData = {
  description: string;
  amount: number;
  category: string;
};

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
  categories: string[];
}

const ExpenseForm = ({ onSubmit, categories }: Props) => {
  const schema = z.object({
    description: z
      .string()
      .min(3, { message: "Description must be at least 3 characters" }),
    amount: z.number().min(1, { message: "Amount must be at least 1" }),
    category: z.enum(categories as [string, ...string[]], {
      message: "Category is required",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            {...register("category")}
          >
            {categories.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
