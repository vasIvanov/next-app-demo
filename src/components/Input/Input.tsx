import { ChangeEvent } from "react";

const Input = ({
  value,
  handleInputChange,
}: {
  value: string;
  handleInputChange: (inputEvent: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element => {
  return (
    <input
      className="max-w-[260px]"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
