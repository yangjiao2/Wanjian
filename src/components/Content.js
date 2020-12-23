import React from 'react'
import { Box } from 'reoil'

const Content = ({ children }) => {
  return (
    <Box mb={3} fontSize={15} style={{ lineHeight: 1.5, letterSpacing: 1}}>
      {children}
    </Box>
  )
}
6
export default Content
