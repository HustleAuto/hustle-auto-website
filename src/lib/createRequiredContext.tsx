// Reference:
// https://tinytip.co/tips/react-required-context/#:~:text=Creating%20a%20React%20Context%20using,that%20it%20is%20not%20null%20.

import { Provider, createContext, useContext } from 'react';

const EMPTY = Symbol();

export function createRequiredContext<T>(): [Provider<T>, () => T] {
  const context = createContext<T | typeof EMPTY>(EMPTY);

  const Provider = context.Provider as Provider<T>;

  const useStrictContext = () => {
    const value = useContext(context);
    if (value !== EMPTY) return value;
    throw new Error('Missing context provider');
  };

  return [Provider, useStrictContext];
}
