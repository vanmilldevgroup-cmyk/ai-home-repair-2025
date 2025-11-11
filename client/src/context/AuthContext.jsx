import { createContext, useReducer } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // Check for user in local storage on initial load
  // This would be implemented in a real app
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     dispatch({ type: 'LOGIN', payload: user });
  //   }
  // }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
