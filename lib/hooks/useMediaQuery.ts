"use client";

import { useCallback, useSyncExternalStore } from "react";

const getServerSnapshot = () => undefined;

// Returns undefined until resolved on the client — callers must treat that as "not known yet", not as false.
export const useMediaQuery = (query: string) => {
    const subscribe = useCallback(
        (callback: () => void) => {
            const mediaQueryList = window.matchMedia(query);
            mediaQueryList.addEventListener("change", callback);
            return () => mediaQueryList.removeEventListener("change", callback);
        },
        [query],
    );

    const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
