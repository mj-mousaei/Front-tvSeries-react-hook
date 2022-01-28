import React from "react";
import { MenusProvider } from "../components/context/MenusContext";
import { SliderProvider } from "../components/context/SliderContext";

const Provider = ({children}) => {
    return (
        <MenusProvider>
              <SliderProvider>
                 {children}
              </SliderProvider>
        </MenusProvider>
    )
}

export default Provider;