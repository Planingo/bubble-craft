import { ConfigProvider } from 'antd';
import React from 'react';
import { IntlProvider as IntlProviderReact } from 'react-intl';

import en from './languages/en.json';
import fr from './languages/fr.json';

import localeENAntd from 'antd/locale/en_US';
import localeFRAntd from 'antd/locale/fr_FR';

import 'dayjs/locale/en';
import 'dayjs/locale/fr';

export const locale = navigator.language.split(/[-_]/)[0] || 'fr'

const languages = { en, fr }

export const IntlProvider = ({ children }) => {
	return (
		<ConfigProvider locale={locale === "fr" ? localeFRAntd : localeENAntd}>
			<IntlProviderReact locale={locale} messages={languages[locale]}>
				{children}
			</IntlProviderReact>
		</ConfigProvider>
	)
}
