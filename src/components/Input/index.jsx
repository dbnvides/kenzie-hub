import React from "react";
import { Fieldset } from "./styled";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";

export const Input = ({
  id,
  type,
  register,
  placeholder,
  label,
  classname,
  value,
  onChange,
}) => {
  const [iconEye, setIcon] = useState(HiOutlineEyeOff);
  const [typeInput, setTypeInput] = useState(type);

  const handleClick = () => {
    if (typeInput === "password") {
      setTypeInput("text");
      setIcon(HiOutlineEye);
    } else {
      setTypeInput("password");
      setIcon(HiOutlineEyeOff);
    }
  };

  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>
      <input
        type={typeInput}
        id={id}
        placeholder={placeholder}
        className={classname}
        value={value}
        {...register}
        onChange={onChange}
      />
      {type === "password" && (
        <span onClick={() => handleClick()}>{iconEye}</span>
      )}
    </Fieldset>
  );
};
