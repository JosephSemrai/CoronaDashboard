import React, { useState } from 'react';
import usaCities from './usaCities';
import Autocomplete, {
  createFilterOptions
} from '@material-ui/lab/Autocomplete';
import CustomizedInput from './CustomizedInput';

export default function Virtualize() {
  const filterOptions = createFilterOptions({
    limit: 100
  });
  const [cityObject, setCityObject] = useState();

  return (
    <Autocomplete
      limit={100}
      id="virtualizedCityBox"
      options={usaCities}
      autoSelect
      autoHighlight
      onChange={(_, value) => setCityObject(value)}
      filterOptions={filterOptions}
      getOptionLabel={option => `${option.city}, ${option.state}`}
      style={{ width: '100%' }}
      groupBy={t => t.state}
      renderInput={params => (
        <CustomizedInput cityObject={cityObject} params={params} />
      )}
    />
  );
}
