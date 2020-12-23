import React from 'react'
import { Box } from 'reoil'
import Content from '../components/Content'
import Image from '../components/Image'
import MainLayout from '../components/MainLayout'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import { theme } from '../theme'
import { FaUserPlus, FaRegHandshake } from 'react-icons/fa'

// 首页
const HomePage = () => {
  return(
    <MainLayout row>
      <Sidebar titles={['项目介绍', '涧行动态', '公益项目展示', '涧行萤萤公益书屋']}>
        <Box mt={3} center fontWeight='bold' fontSize={1} center bg='#42c060' color='white' p={2} py={4} borderRadius={4} pointer>
          <FaUserPlus style={{marginBottom: 8}} size={28} />
          成为义工
        </Box>

        <Box mt={3} center fontWeight='bold' fontSize={1} center bg='#42c060' color='white' p={2} py={4} borderRadius={4} pointer>
          <FaRegHandshake style={{marginBottom: 8}} size={28} />
          成为合作伙伴
        </Box>

        <Box mt={3} center fontWeight='bold' fontSize={1} center bg='#42c060' color='white' p={2} py={4} borderRadius={4} pointer>
          <FaRegHandshake style={{marginBottom: 8}} size={28} />
          我要捐款
        </Box>

      </Sidebar>

      <Box stretch>

        <Title>项目介绍</Title>
        <Content>
          涧行者乡村服务发展中心——一方面展示乡村妇女群体为推动社区发展所作出的努力，如妇女能力提升及赋权、乡村教育、农村养老、城乡互动、共建、共享型社区发展等，激励更多的乡村妇女群体参与乡村振兴事业；另一方面希望能凝聚社会公益资源，服务乡村妇女，关爱乡村儿童，携手乡村妇女共创自主、平等、和谐、美丽生活。
        </Content>
        <Box center>
          <Image src='https://i.loli.net/2020/09/26/VHlkZx1ongGdrzP.png' />
        </Box>


        <Title>涧行动态</Title>
        <Content>
          NEW·青麟X中规院｜和五位建筑学者一起，设计未来乡村建筑。
        </Content>
        <Box center>
          <Image src='https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        </Box>

        <Title>公益项目展示</Title>
        <Content>
          凝聚社会公益资源，服务乡村妇女，关爱乡村儿童，携手乡村妇女共创自主、平等、和谐、美丽生活
        </Content>

        <Title>涧行萤萤公益书屋</Title>
        <Content>
          青麟实践平台特别招募并培训了超过100名志愿者，为孩子提供各个学科的兴趣课程，涵盖英语、自然、历史、人文、财商、心理、艺术、科技等诸多学科，这些课程全部是公益免费的，希望能够帮助孩子拓展视野，更好地认识世界。同时青麟实践平台还设置了奖学金计划，有3名表现出色的孩子，可以获得200元的奖学金（约为5%比例），考核标准包括课堂出勤、课程表现、老师评价三个方面。
        </Content>

      </Box>

    </MainLayout>
  )
}

export default HomePage
