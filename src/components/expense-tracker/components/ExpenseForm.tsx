import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

type ExpenseFormData = {
  description: string;
  amount: number;
  category: string;
};

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
  categories: string[];
  expense?: ExpenseFormData; // Optional expense for editing
  onCancel: () => void;
}

const ExpenseForm = ({ onSubmit, categories, expense, onCancel }: Props) => {
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
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
    values: expense || undefined, // Set initial values if expense exists
  });

  // Reset form when expense prop changes
  useEffect(() => {
    if (expense) {
      reset(expense);
    }
  }, [expense, reset]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">
          {expense ? "Edit Expense" : "Add Expense"}
        </h2>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            if (!expense) {
              reset();
            }
          })}
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              id="description"
              placeholder="Enter description..."
              {...register("description")}
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="amount" className="form-label fw-bold">
                Amount
              </label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className={`form-control ${
                    errors.amount ? "is-invalid" : ""
                  }`}
                  id="amount"
                  placeholder="0.00"
                  step="0.01"
                  {...register("amount", { valueAsNumber: true })}
                />
                {errors.amount && (
                  <div className="invalid-feedback">
                    {errors.amount.message}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="category" className="form-label fw-bold">
                Category
              </label>
              <select
                className={`form-select ${errors.category ? "is-invalid" : ""}`}
                id="category"
                {...register("category")}
              >
                <option value="">Select category...</option>
                {categories.map((category: string) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <div className="invalid-feedback">
                  {errors.category.message}
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2">
            {expense && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  reset();
                  onCancel();
                }}
              >
                Cancel
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {expense ? "Update" : "Add"} Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
