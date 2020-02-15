import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';
import InputMask from 'react-input-mask';
import { Container, ErrorMessage } from './styles';
import Grid from '../Grid';

interface Options {
  value: string;
  label: string;
}

interface Props {
  type: 'text' | 'select' | 'password' | 'date';
  name: string;
  placeholder?: string;
  label: string;
  half?: boolean;
  error?: string;
  options?: Options[];
}

const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  label,
  half,
  error,
  options,
}) => {
  const { register, watch, setValue } = useFormContext();
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  const focusInput = () => inputRef?.focus();

  const value = watch(name);

  const customStyles = {
    container: (provided: object) => ({
      ...provided,
      width: '100%',
      maxWidth: '275px',
    }),
    control: (provided: object) => ({
      ...provided,
      borderColor: '#000',
    }),
    option: (provided: object) => ({
      ...provided,
      color: '#000',
    }),
  };

  const handleSelectChange = (selectedOption: any) =>
    setValue(name, selectedOption.value);

  return (
    <Grid fullWidth direction="column">
      {type !== 'date' && (
        <Container half={half} onClick={focusInput} select={type === 'select'}>
          {['text', 'password'].includes(type) && (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              ref={ref => {
                register(ref);
                setInputRef(ref);
              }}
            />
          )}
          {type === 'select' && (
            <Select
              options={options}
              styles={customStyles}
              name={name}
              onChange={handleSelectChange}
              placeholder={label}
            />
          )}
          {type !== 'select' && (
            <span className={value ? 'active' : ''}>{label}</span>
          )}
        </Container>
      )}
      {type === 'date' && (
        <Container half={half}>
          <InputMask
            mask="99/99/9999"
            name={name}
            inputRef={() => register({ name })}
            onChange={e => setValue(name, e.currentTarget.value)}
            maskChar={null}
            placeholder="dd/mm/yyyy"
          />
          <span className={value ? 'active' : ''}>{label}</span>
        </Container>
      )}
      <ErrorMessage half={half}>{error}</ErrorMessage>
    </Grid>
  );
};

export default Input;
