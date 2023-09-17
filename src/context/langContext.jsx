import React, {useState} from "react";
import English from '../languajes/en-US.json';
import Spanish from '../languajes/es-ES.json';
import { IntlProvider } from "react-intl";


const langContext = React.createContext();

const LangProvider = ({children}) => {

    let localeDefault;
    let messagesDefault;

    const lang = localStorage.getItem('lang');

    if (lang) {
        localeDefault = lang;
        if(lang === 'es-ES'){
            messagesDefault = Spanish;
        } else if (lang === 'en-US'){
            messagesDefault = English;
        } else {
            localeDefault = 'en-US';
            messagesDefault = English
        }
    }

    const [messajes, setMessajes] = useState(messagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (language) => {
        switch (language) {
            case 'en-US' :
                setMessajes(English);
                setLocale('en-US');
                localStorage.setItem('lang', language)
                break;
            case 'es-ES' :
                setMessajes(Spanish);
                setLocale('es-ES');
                localStorage.setItem('lang', language)
                break;
            default:
                setMessajes(Spanish);
                setLocale('es-ES');
        }
    }

    return (
        <langContext.Provider value={{setLanguage: setLanguage, locale: locale}}>
           <IntlProvider locale={locale} messages={messajes}>
            {children} 
           </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext};