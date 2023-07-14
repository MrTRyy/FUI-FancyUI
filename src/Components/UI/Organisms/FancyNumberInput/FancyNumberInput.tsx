import React, { ChangeEvent, useEffect, useState } from 'react';
import InputCreator, { IInputCreatorHandler, IInputCreatorActiveHandler } from '../../Molecules/InputCreator/InputCreator';
import NumberInput from '../../Molecules/NumberInput/NumberInput';

interface IFancyNumberInput {
  id?: string;
  value?: string;
  errorMessage?: string;
  name?: string;
  disabled?: boolean;
  align?: 'left' | 'center';
  handler?: IInputCreatorHandler;
  active?: boolean;
  activeHandler?: IInputCreatorActiveHandler;
  autoWidth?: boolean;
  icon?: JSX.Element;
  label?: string;
  minValue?: number;
  maxValue?: number;
}
// --------------------------------------------------------------------------- //
// ----The NumberInput Comonent with surrounding icon, label and underline --- //
// --------------------------------------------------------------------------- //
export default function FancyNumberInput(props: IFancyNumberInput) {
  const [value, setValue] = useState('');

  // handles the input value change and calls the handler from the parent
  const changeHandler: IInputCreatorHandler = (value?: string, e?: ChangeEvent<HTMLInputElement>) => {
    setValue(value ? value : '');
    props.handler && props.handler(value, e);
  };

  // sets the value from the parent if it is passed
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  return <InputCreator {...props} value={value} handler={changeHandler} InputComponent={NumberInput} />;
}
