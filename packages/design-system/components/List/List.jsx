import React from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import PropTypes from 'prop-types';
import './list.css';

/**
 * 
 * # 🚧 _Composant en construction_ 🚧
 * 
 * # TODO
 * 
 * ## Description
 * 
 * Documentations andt du composant : https://ant.design/components/list/
 * 
 */
export const List = ({ data, Row, ...props }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          itemData={data}
          className="List"
          height={height - 65}
          itemCount={data.length}
          itemSize={35}
          width={width}
        >
          {Row}
        </FixedSizeList >
      )}
    </AutoSizer>
  );
};

List.propTypes = {
    /**
     * TODO property
     */
     dataSource: PropTypes.array,
};

List.defaultProps = {
};
