import React from 'react';
import './gallery.css';
import { Card } from '../Card/Card';
import { useIntl } from 'react-intl';
import { Spin } from '../Spin/Spin';
import { NoData } from '../NoData/NoData';

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
export const Gallery = ({
  loading,
  name,
  Add,
  datas,
  ...props 
}) => {
	const intl = useIntl()

	if (loading)
		return (
			<div className='storybook-gallery-loading'>
				<Spin size="large" />
			</div>
		)

	if (datas.length === 0)
		return <NoData
				Add={Add}
				cta={intl.formatMessage({ id: `app.add.${name}` })}
				description={intl.formatMessage({ id: `no.data.${name}` })}
				title={intl.formatMessage({ id: `app.add.${name}` })}
			/>

  return (
    <div className="storybook-gallery">
      {datas && datas.map((data) => <div className="container" key={data.id}>
        <Card
          tags={data.tags}
          downloadTitle={data.downloadTitle}
          cloudTitle={data.cloudTitle}
          deleteTitle={data.deleteTitle}
          link={data.link}
          title={data.name}
          alt={data.alt}
          src={data.src}
        />
      </div>)}
    </div>
  );
};

Gallery.propTypes = {
};

Gallery.defaultProps = {
};
