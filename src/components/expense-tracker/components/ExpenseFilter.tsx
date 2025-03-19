interface Props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select border-5 border-gray-300 rounded-md p-2 mb-3"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
