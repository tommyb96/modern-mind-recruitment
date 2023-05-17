import React from "react";
import GlobalStyle from "./Styles";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Leistungen from "./components/Leistungen";
import Kontakt from "./components/Kontakt";
import RotatingCube from "./components/RotatingCube";
import Workshop from "./components/Workshop/Workshop";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutzerklärung from "./pages/Datenschutzerklärung";
import ErrorPage from "./pages/ErrorPage";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "Impressum",
      element: <Impressum />,
    },
    { path: "datenschutzerklärung", element: <Datenschutzerklärung /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <GlobalStyle />
        <Wrapper>
          <NavBar />
          <Home />
          <AboutUs />
          <Leistungen />
          <Workshop />
          <Kontakt />
          <RotatingCube />
        </Wrapper>
        <Footer />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
