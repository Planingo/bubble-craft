import React from 'react'
import { IntlProvider as IntlProviderReact } from 'react-intl'

import en from './languages/en.json'
import fr from './languages/fr.json'
	
const languages = { en, fr }


export const IntlProvider = ({ children }) => {
	const locale = global.navigator?.language.split(/[-_]/)[0] || 'fr'
	return (
		<IntlProviderReact locale={locale} messages={languages[locale]}>
			{children}
		</IntlProviderReact>
	)
}
