import React, { useRef } from 'react';

export const TextInputWithFocusButton = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus();
        }
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}


