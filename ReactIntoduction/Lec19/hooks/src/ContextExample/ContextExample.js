import React from 'react';
import Main from './Main';
import { GlobalContext } from './Context';

function ContextExample() {
    const [lang, setLang] = React.useState('Arabic');

    function onLangChanged() {
        if (lang === 'Arabic') {
            setLang('English')
        } else {
            setLang('Arabic');
        }
    }

    return (
        <GlobalContext.Provider value={lang}>
            <Main />
            <button onClick={onLangChanged}>Toggle Lang</button>
        </GlobalContext.Provider>
    )
}

export default ContextExample;