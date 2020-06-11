import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (bool) => {
    const [someValue, setSomeValue] = useLocalStorage('toggle', bool);
    useEffect(() => {
        someValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [someValue]);
    return [someValue, setSomeValue];
};