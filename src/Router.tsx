import React from "react";
import { Routes,Route } from "react-router-dom";
import { RouterLayout } from './common/RouterLayout';
import { HomePage, LoginPage, CharacterPage } from './pages';

export const AppRouter:React.FC<{}> = ()=>{
    return (
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
}