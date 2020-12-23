import React from 'react'
import { Box } from 'reoil'
import { theme } from '../theme'

const Headline = ({children}) => {

  return(
    <Box color={theme.secondary} fontSize={3} fontWeight='bold' mb={2}>
      {children}
    </Box>
  )
}

export default Headline