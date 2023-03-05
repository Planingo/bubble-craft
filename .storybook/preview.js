import '../Theme/antd.customize.less'
import i18n from './i18next.js'
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

export const parameters = {
    options: {
        storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
    i18n,
    locale: 'en',
    locales: {
        en: {title: "English", left: '🇺🇸'},
        fr: {title: "Français", left: '🇫🇷'},
    },
}

const withI18next = (Story) => {
    return (
      // This catches the suspense from components not yet ready (still loading translations)
      // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

  export const decorators = [withI18next];

  