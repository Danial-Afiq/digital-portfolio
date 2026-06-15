import { createContext, useContext } from "react";

/**
 * Whether the boot intro has finished. Defaults to true so components animate
 * normally when there's no boot screen (deep links, returning visitors).
 */
export const BootReadyContext = createContext(true);
export const useBootReady = () => useContext(BootReadyContext);
