import React, { createContext } from 'react';

const defaultValue  = 'en';

export const { Provider, Consumer } = createContext(defaultValue);
