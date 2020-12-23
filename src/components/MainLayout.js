import React from 'react'
import { Box } from 'reoil'
import { theme } from '../theme'

const MainLayout = (props) => {
  return <Box stretch mx='auto' row={props.row} paddingY={5} maxWidth={theme.layout.maxWidth}>{props.children}</Box>
}

export default MainLayout
