import React from "react";
import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar";

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            {/* lo que se hace es llamar siempre primero al componente de NavBar y despues al componente de Outlet que significa 
            que puede ir cualquier Otro componente alli*/}
            <NavBar />
            <Outlet />
        </>
    )
}