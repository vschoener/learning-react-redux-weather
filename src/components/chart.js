import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default ({ data, color = "black", width = 180, height = 120 }) => {
  return (
    <div>
      <Sparklines data={data} width={width} height={height}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> Average: {average(data)}</div>
    </div>
  );
}
