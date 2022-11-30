import {createContext, useContext, useState} from "react";

type I18nContextType = {
  t: any;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType>({t: {}, setLocale: null});
export const useI18n = () => useContext(I18nContext);

const I18nProvider = ({children}) => {
  const [t, setT] = useState<any>(null);

  const setLocale = async (locale: string) => {
    try {
      const result = await fetch('/i18n/' + locale + '.json');
      const json = await result.json();
      setT(json);
    } catch {
      console.log('Failed to fetch translations for locale: ' + locale);
      setT({});
    }
  };

  return (
    <I18nContext.Provider value={{t, setLocale}}>
      {children}
    </I18nContext.Provider>
  )
};

export default I18nProvider;
