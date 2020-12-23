import { rgba, shade } from 'polished'
import React from 'react'
import { Box } from 'reoil'
import { theme } from '../theme'

const Sidebar = ({ titles = ['标题一', '标题二'], children }) => {
  return (
    <Box className='Sidebar' stretch minWidth={160} mr={5}>
      <Box bg={rgba(theme.secondary, .2)} fontSize={14} minHeight={80} p={2} borderBox borderRadius={4} color={shade(.2, theme.primary)}>
        {titles.map((title, i) => (
          <Box key={title} className='Sidebar__item' py={2}>{`${i+1}、${title}`}</Box>
        ))}
      </Box>
      {children}
    </Box>
  )
}

export default Sidebar
