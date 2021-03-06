import React from 'react'
//
import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import { Chart } from '../../../dist'
let sourceCode
export default () => {
  const { data, randomizeData } = useChartConfig({
    dataType: 'linear',
    series: 10,
    useR: true
  })
  const series = React.useMemo(
    () => ({
      type: 'bubble',
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart
          data={data}
          series={series}
          axes={axes}
          grouping="single"
          tooltip
        />
      </Box>
      <br />
      <pre>
        <code>{sourceCode}</code>
      </pre>
    </>
  )
}