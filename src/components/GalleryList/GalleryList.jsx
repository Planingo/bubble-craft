import React from 'react';
import './galleryList.css';
import { Spin } from '../Spin/Spin';
import { NoData } from '../NoData/NoData';
import { Table } from '../Table/Table';
import { useIntl } from 'react-intl';
import { toCapitalized } from '../../utils/formatText';

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
  actions,
  ...props 
}) => {
	const {formatMessage} = useIntl()
if (loading)
  return (
    <div className='storybook-gallerylist-loading'>
      <Spin size="large" />
    </div>
  )

if (datas?.length === 0)
  return (
    <NoData
      Add={Add}
      cta={formatMessage({ id: `app.add.${name}` })}
      description={formatMessage({ id: `no.data.${name}` })}
      title={formatMessage({ id: `app.add.${name}` })}
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
        columns={columns.map((column) => ({
          dataIndex: column.key,
          key: column.key,
          title: toCapitalized(formatMessage({ id: `app.${column.key}`})),
          render: column.render,
          sorter: column.sorter,
          filters: column.filters,
          filterSearch: true,
          onFilter: column.onFilter
        }))}
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
