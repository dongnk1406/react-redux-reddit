import React from "react";

function Input(props) {
  const { id, label, data, className, setData, value, inputType, cols, rows } =
    props;

  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={id}>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          id={id}
          className={className}
          placeholder={data}
          cols={cols}
          rows={rows}
          value={value}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          id={id}
          value={value}
          placeholder={data}
          className={className}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
