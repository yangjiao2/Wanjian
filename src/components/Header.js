import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Box } from 'reoil'
import { theme } from '../theme'
import { GiGreenhouse } from 'react-icons/gi'

const Header = () => {
  return (
    <Box
      className='Header'
      center
      css={css`
        background: ${theme.primary};
        color: white;
      `}
      height={80}>

      <Box className='bg' width='100%' height='100%' position='absolute' cover>
        <img
          style={{
            mixBlendMode: 'soft-light',
            opacity: 0.3
          }}
          alt='bg'
          src='https://i.loli.net/2020/09/26/qe4nc1DtwJj9yEf.jpg'
        />
      </Box>

      <Box className='title' style={{ zIndex: 2 }} row center>
        <Box mr={2}>
          <GiGreenhouse size={28} />
        </Box>
        <h2>潜山市万涧村涧行者乡村服务发展中心</h2>
      </Box>
    </Box>
  )
}

export default Header
