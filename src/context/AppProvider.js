import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import useFirestore from '../hooks/useFileStore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const {
        user: { uid },
    } = useContext(AuthContext); // user đăng nhập hiện tại

    const todosCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operators: '==',
            compareValue: uid,
        };
    }, [uid]);
    const todo = useFirestore('todos', todosCondition);

    return (
        <AppContext.Provider
            value={{
                todo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
