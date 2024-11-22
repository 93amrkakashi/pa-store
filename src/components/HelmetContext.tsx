import React, { createContext, useContext, ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface HelmetProviderSeoProps {
  children: ReactNode;
}

export const HelmetProviderSeo: React.FC<HelmetProviderSeoProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
          rel="stylesheet"
        />

        <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />

        <link type="text/css" rel="stylesheet" href="css/slick.css" />
        <link type="text/css" rel="stylesheet" href="css/slick-theme.css" />

        <link type="text/css" rel="stylesheet" href="css/nouislider.min.css" />

        <link rel="stylesheet" href="css/font-awesome.min.css" />

        <link type="text/css" rel="stylesheet" href="css/style.css" />

        <link
          href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

const HelmetContext = createContext<null | undefined>(null);

export const useHelmet = () => {
  const context = useContext(HelmetContext);
  if (context === null) {
    throw new Error("useHelmet must be used within a HelmetProvider");
  }
  return context;
};
