import { rgba } from 'polished'
import React from 'react'
import { Box } from 'reoil'
import { theme } from '../theme'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Title = ({children}) => {
  return (
    <Box fontSize={5} fontWeight='bolder' color={theme.primary} stretch mb={4} mt={4} css={css`
      &:first-of-type {
        margin-top: 0;
      }
    `}>
      <Box mb={2}>{children}</Box>
      <Box height={1} bg={rgba(theme.primary, 0.4)}></Box>
    </Box>
  )
}

export default Title
