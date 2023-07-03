import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from './globals';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

const Theme = ({ children }) => {
  const {isDarkTheme} = useContext(ThemeContext);

  return (
  <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)};

export default Theme;