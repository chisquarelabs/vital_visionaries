import { useEffect, useState } from "react";
import { Button } from "@mui/material";

type InputBoxProps = {
  type?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (name: string, value: string | File) => void;
};

export const InputBox: React.FC<InputBoxProps> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value || ""}
      name={name}
      onChange={(e) => {
        onChange(name, e.target.value);
      }}
      className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
    />
  );
};

type TextAreaProps = {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  disabled?: boolean;
};

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  name,
  value,
  onChange = () => {},
  disabled,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={(e) => onChange(name, e.target.value)}
      disabled={disabled}
      className="h-30 overflow-hidden w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    />
  );
};

type SwitchBoxProps = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

export const SwitchBox: React.FC<SwitchBoxProps> = ({
  enabled,
  setEnabled,
}) => {
  return (
    <div>
      <label
        htmlFor="toggle3"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle3"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
            checked={enabled}
          />
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full
              bg-white transition ${
                enabled &&
                "!right-1 !translate-x-full !bg-primary dark:!bg-white"
              }`}
          >
            <span className={`hidden ${enabled && "!block"}`}>
              <svg
                className="fill-white dark:fill-black"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                  fill=""
                  stroke=""
                  strokeWidth="0.4"
                ></path>
              </svg>
            </span>
            <span className={`${enabled && "hidden"}`}>
              <svg
                className="h-4 w-4 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export const DatePicker = ({
  label,
  onChange,
  value,
  name,
}: {
  label: string;
  onChange: any;
  value: any;
  name: string;
}) => {
  return (
    <div>
      <div className="relative">
        <input
          name={name}
          value={value || ""}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          placeholder={label}
          type="date"
          className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
    </div>
  );
};

type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  isChecked,
  setIsChecked,
}) => {
  return (
    <div>
      <label
        htmlFor="checkboxLabelThree"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelThree"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
            checked={isChecked}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span
              className={`text-primary opacity-0 ${
                isChecked && "!opacity-100"
              }`}
            >
              <svg
                className="h-3.5 w-3.5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

interface Option {
  label: string;
  value: string | number;
}

interface SelectBoxProps {
  name: string;
  label: string;
  options: Option[];
  value: string | number;
  onChange: (name: string, value: string | number) => void;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  name,
  label,
  options = [],
  value,
  onChange = () => {},
}) => {
  return (
    <select
      className="h-full w-full appearance-none rounded border border-stroke bg-transparent outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
      value={value || ""}
      name={name}
      onChange={(e) => {
        onChange(name, e.target.value);
      }}
    >
      <option value="" disabled>
        Select an option :- {label}
      </option>
      {options.length > 0 &&
        options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
    </select>
  );
};

export const MultiSelectBox = ({ label }: { label: string }) => {
  return (
    <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
      <div className="flex flex-wrap items-center">
        <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
          {label}
          <span className="cursor-pointer pl-2 hover:text-danger">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </span>
        <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
          Development
          <span className="cursor-pointer pl-2 hover:text-danger">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </span>
      </div>
      <select
        name=""
        id=""
        className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
      >
        <option value="">Option</option>
        <option value="">Option</option>
      </select>
      <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
              fill="#637381"
            ></path>
          </g>
        </svg>
      </span>
    </div>
  );
};

export const ButtonForm = ({ label, onClick }: any) => {
  return (
    <Button
      sx={{ color: "#fff", background: "#172166",textTransform:"none" }}
      variant="text"
      onClick={onClick}
      fullWidth
      size="large"
    >
      {" "}
      {label}
    </Button>
  );
};

export const SearchSelectBox = ({
  name,
  label,
  options = [],
  value,
  onChange = () => {},
}: any) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentOptions, setCurrentOptions] = useState(options || []);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    setCurrentValue(options.find((x: any) => x.value === value)?.label || "");
  }, [value]);

  useEffect(() => {
    options?.length > 0 && setCurrentOptions(options);
  }, [options]);

  const search = (e: any) => {
    setCurrentValue(e.target?.value);
    if (e.target?.value) {
      const newOptions = options.filter((x: any) =>
        x?.label?.toLowerCase().includes(e.target?.value?.toLowerCase())
      );
      setCurrentOptions(newOptions);
    } else {
      setCurrentOptions(options);
    }
  };
  return (
    <div className="relative ">
      <input
        type="text"
        placeholder={label}
        name={name}
        value={currentValue}
        onChange={(e) => search(e)}
        onFocus={() => setSelect(true)}
        onBlur={() => setSelect(false)}
        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
      {currentOptions.length > 0 && (
        <div
          className="absolute max-h-50 overflow-auto bg-white z-10 shadow-lg w-full dark:bg-form-input rounded-xl"
          onMouseDown={(e) => e.preventDefault()}
        >
          {currentOptions.map((item: any, index: number) => {
            return (
              <div
                className={`${
                  select ? "block" : "hidden"
                } w-full cursor-pointer p-2 hover:bg-primary hover:text-white rounded-xl`}
                key={index}
              >
                <p
                  onClick={() => {
                    onChange(name, item?.value);
                    setSelect(false);
                  }}
                >
                  {item?.label}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
