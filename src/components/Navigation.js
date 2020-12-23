import React from 'react'
import { Box } from 'reoil'
import { theme } from '../theme'
import { Link, useLocation } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const navs = [
  {
    to: '/',
    title: '首页'
  },
  {
    to: '/join',
    title: '走进涧行者'
  },
  {
    to: '/recent',
    title: '涧行动态'
  },
  {
    to: '/support',
    title: '支持我们'
  },
  {
    to: '/contact',
    title: '联系我们'
  }
]

const Navigation = () => {
  const location = useLocation()

  return (
    <Box className='Navigation' center py={3} bg='whitesmoke'>
      <Box
        className='Navigation-wrapper'
        width='100%'
        maxWidth={theme.layout.maxWidth}
        row
        center
        rowEvenly>
        {navs.map(nav => (
          <Box
            key={nav.title}
            className='Navigation__item'
            flex={1}
            center
            color={
              location.pathname === `${nav.to}` ? 'inherit' : theme.black(0.45)
            }>
            <Link to={nav.to}>{nav.title}</Link>

            {location.pathname === `${nav.to}` && (
              <Box
                position='absolute'
                width='100%'
                height={2}
                borderRadius={10}
                background={theme.primary}
                bottom={-16}
              />
            )}

          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Navigation
