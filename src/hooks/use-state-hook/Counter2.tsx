import React, { FunctionComponent, useState } from 'react';

interface CounterProps {
    clicks: number;
    info?: string;
}

export const Counter: FunctionComponent<CounterProps> = ({ clicks, info }) => {
    const [value, setValue] = useState<CounterProps>({clicks});
    return <>
        <p>Clicks: {value.clicks} {value.info}</p>
        <button onClick={
            () => setValue({clicks: value.clicks + 1, info: value.info})
        }>+</button>
        <button onClick={
            () => setValue({clicks: value.clicks - 1, info: value.info})
        }>-</button>
        <button onClick={
            () => setValue({info: !value.info ? info : '', clicks: value.clicks })
        }>Turn on (off) Info</button>
    </>
}


