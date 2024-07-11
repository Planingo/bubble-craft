import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "../src";
import '../src/Theme/index.css';
import { IntlProvider } from '../src/translation/IntlProvider';

export const parameters = {
    options: {
        storySort: (a, b) =>
        a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
}

export const decorators = [
    (Story) => {
        return (
            <ThemeProvider>
                <IntlProvider>
                    <BrowserRouter>
                        <Story />
                    </BrowserRouter>
                </IntlProvider>
            </ThemeProvider>
        );
    },
  ];

export const tags = ['autodocs'];
  
  