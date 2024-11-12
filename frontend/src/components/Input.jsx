const Input = ({ name, label, isTextArea = false, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium text-sm text-gray-900">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          className="w-full rounded-md border-2 py-1 px-2 text-sm border-gray-300 focus:outline-none"
          {...props}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          className="w-full rounded-md border-2 py-1 px-2 text-sm border-gray-300 focus:outline-none"
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
