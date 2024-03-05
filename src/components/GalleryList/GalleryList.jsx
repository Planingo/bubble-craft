import React from 'react';
import './galleryList.css';
import { Spin } from '../Spin/Spin';
import { NoData } from '../NoData/NoData';
import { Table } from '../Table/Table';
import { useIntl } from 'react-intl';

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
export const GalleryList = ({
  loading,
  name,
  Add,
  datas,
  columns,
  ...props 
}) => {
	const intl = useIntl()
if (loading)
  return (
    <div className='storybook-gallerylist-loading'>
      <Spin size="large" />
    </div>
  )

if (datas.length === 0)
  return (
    <NoData
      Add={Add}
      cta={intl.formatMessage({ id: `app.add.${name}` })}
      description={intl.formatMessage({ id: `no.data.${name}` })}
      title={intl.formatMessage({ id: `app.add.${name}` })}
    />
  )

return (
  <>
    <div className="storybook-gallerylist">
      <Table
        scroll={{ y: Math.floor((window.screen.height - 350)) }}
        tableLayout="fixed"
        pagination={false}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={datas}
      />
    </div>
  </>
)
};

GalleryList.propTypes = {
};

GalleryList.defaultProps = {
};
