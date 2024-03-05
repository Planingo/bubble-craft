import React from 'react';
import { useIntl } from 'react-intl';
import { AddFirstItem } from '../AddFirstItem/AddFirstItem';
import { Empty } from '../Empty/Empty';
import './noData.css'

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * 
 * 
 */
export const NoData = ({ description, cta, Add, title }) => {
	const intl = useIntl()
	return (
		<div className="storybook-noData">
			<Empty description={description || intl.formatMessage({ id: 'no.data' })}>
				<AddFirstItem title={title || ''} cta={cta || ''}>
					{Add && <Add />}
				</AddFirstItem>
			</Empty>
		</div>
	)
}

NoData.propTypes = {
};

NoData.defaultProps = {
};
