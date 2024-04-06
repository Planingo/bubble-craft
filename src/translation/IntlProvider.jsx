import React, { useState } from 'react'
import { IntlProvider as IntlProviderReact } from 'react-intl'
import { ConfigProvider } from 'antd';

import en from './languages/en.json'
import fr from './languages/fr.json'

import localeFRAntd from 'antd/locale/fr_FR';
import localeENAntd from 'antd/locale/en_US';
import dayjs from 'dayjs';

import 'dayjs/locale/fr';
import 'dayjs/locale/en';

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
