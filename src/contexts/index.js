import React from 'react';
import stores from '../store';

export const StoresContext = React.createContext({
    ...stores
})