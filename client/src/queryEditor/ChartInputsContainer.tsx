import React from 'react';
import { connect } from 'unistore/react';
import {
  handleChartConfigurationFieldsChange,
  handleChartTypeChange,
} from '../stores/queries';
import ChartInputs from './ChartInputs';

function mapStateToProps(state: any) {
  return {
    queryResult: state.queryResult,
    chartType: state.query && state.query.chart && state.query.chart.chartType,
    fields: state.query && state.query.chart && state.query.chart.fields,
  };
}

const Connected = connect(mapStateToProps, {
  handleChartConfigurationFieldsChange,
  handleChartTypeChange,
})(React.memo(ChartInputsContainer));

function ChartInputsContainer({
  chartType,
  fields,
  queryResult,
  handleChartConfigurationFieldsChange,
}: any) {
  return (
    <ChartInputs
      chartType={chartType}
      queryChartConfigurationFields={fields}
      onChartConfigurationFieldsChange={handleChartConfigurationFieldsChange}
      queryResult={queryResult}
    />
  );
}

export default Connected;
