import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppState(onChange: (status: AppStateStatus) => void) {
    useEffect(() => {
        const vevo = AppState.addEventListener('change', onChange);
        return () => vevo.remove()
    }, [onChange]);
}
