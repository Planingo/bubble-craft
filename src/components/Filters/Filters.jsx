import React from 'react';
import { useIntl } from "react-intl";
import { toCapitalized } from "../../utils/formatText";
import { Select } from "../Select/Select";
import './filters.css';

export const Filters = ({selects, count}) => {
  const {formatMessage} = useIntl()
  return <div className="container">
    <div>
      {selects?.map(select => <Select 
        key={select.placeholder}
        defaultValue={select.defaultValue}
        placeholder={toCapitalized(formatMessage({id: select.placeholder}))}
        options={select.options}
        allowClear={select.allowClear}
        onChange={select.onChange}
        mode={select.mode}
      />)}
    </div>
    <p>{formatMessage({id: count.id}, {count: count.count})}</p>
  </div>
}
