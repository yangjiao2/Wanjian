import React from 'react'
import { Box } from 'reoil'
import Content from '../components/Content'
import Image from '../components/Image'
import MainLayout from '../components/MainLayout'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import { theme } from '../theme'
import Headline from '../components/Headline'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

// 首页
const ContactPage = () => {
  return (
    <MainLayout row>
      {/* <Sidebar
        titles={[
          '新闻动态',
          '涧行动态',
          '媒体关注',
          '视频分享',
          '感悟分享'
        ]}></Sidebar> */}

      <Box stretch width='100%'>
        <Title>联系我们</Title>
        <Content>
          <Headline>潜山市万涧村涧行者乡村服务发展中心</Headline>
          <Box p={3} borderRadius={4} boxShadow={theme.boxShadow}>
            <Box py={2}></Box>
            <strong>联系方式</strong>
            <p>电话/传真: 20022000220</p>
            <p>邮箱：someemail@email.com</p>
            <p>微信：wechatisme</p>
            <p>地址：someplaceonearth</p>
          </Box>
        </Content>
      </Box>
    </MainLayout>
  )
}

export default ContactPage
