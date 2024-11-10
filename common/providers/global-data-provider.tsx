"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { GlobalData } from "../types/global-data.types";

const GlobalDataContext = createContext<GlobalData>({} as GlobalData);

export default function GlobalDataProvider({
    children,
    globalData,
    }: Readonly<PropsWithChildren<{
    globalData: GlobalData;
}>>) {
    return (
        <GlobalDataContext.Provider value={globalData}>
            {children}
        </GlobalDataContext.Provider>
    );
}


export const useGlobalData = () => {
    const globalData = useContext(GlobalDataContext);
    return globalData;
}