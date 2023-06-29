//Importamos las dependencias
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import citaReducer from "./features/quote/citaSlice";
import { RootState } from "./app/store";

//custom render 
const customRender = (
    ui: React.ReactElement,
    {
        preloadedState,
        store =configureStore({
            reducer:{
                cita : citaReducer,
            },
            preloadedState,
        }),
        ...renderOpcions
    }:{
        preloadedState?: RootState;
        store?: ReturnType<typeof configureStore>;
    } = {}
) => {
    const Wrapper: React.FC<{
        children: React.ReactNode;
    }> = ({ children }) => <Provider store={store}>{children}</Provider>;

    render(ui, {
        wrapper:Wrapper,
        ...renderOpcions,
    });
};

// re-exportamos
export * from "@testing-library/react";

// se sobrescrbie el metodo render
export { customRender as render};