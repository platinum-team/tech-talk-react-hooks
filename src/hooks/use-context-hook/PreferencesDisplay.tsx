import React, { useContext } from 'react';

export const LanguageContext = React.createContext({ lang: 'en' });

export const PreferencesDisplay = () => {
  const { lang } = useContext(LanguageContext);
  return <>
    <p>Your selected language: {lang}</p>
  </>
}
