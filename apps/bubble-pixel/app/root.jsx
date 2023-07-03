import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeProvider, IntlProvider } from "@planingo/design-system"
import { cssBundleHref } from "@remix-run/css-bundle";
import globalCss from './global.css'
import { UserProvider } from "./components/user-context";

export const meta = () => ({
  charset: "utf-8",
  title: "Bubble pixel",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
  return [
    ...(cssBundleHref
      ? [{ rel: "stylesheet", href: cssBundleHref }]
      : []),
    { rel: "stylesheet", href: globalCss },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <UserProvider>
          <IntlProvider>
            <ThemeProvider>
              <Outlet />
            </ThemeProvider>
          </IntlProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </UserProvider>
      </body>
    </html>
  );
}
