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
const RecentPage = () => {
  return (
    <MainLayout row>
      <Sidebar
        titles={[
          '新闻动态',
          '涧行动态',
          '媒体关注',
          '视频分享',
          '感悟分享'
        ]}></Sidebar>

      <Box stretch>
        <Title>新闻动态</Title>
        <Content>
          NEW·青麟X中规院｜和五位建筑学者一起，设计未来乡村建筑。
          <br />
          由中国城市规划设计研究院发起“中国乡村共建计划第一期”。特邀天津大学建筑学院副教授王志刚主讲，北京林业大学园林学院副教授郑小东、浙江大学建筑系教授贺勇、中央美术学院建筑学院教授何崴、中央美院建筑学院副教授韩文强参与。乡村共建计划是一个长期计划，第一期项目分为线上乡村建筑设计和线下共建参与两个部分，线上你将和资深学者一起，探究乡村未来建筑设计的美学完成自己的新乡土建筑设计方案；线下你将在导师指导下为万涧村搭建面包窑、瑜伽台，完成实际作品。
        </Content>
        <Box center>
          <Image src='https://i.loli.net/2020/09/26/VHlkZx1ongGdrzP.png' />
        </Box>

        <Title>涧行动态</Title>
        <Content>
          NEW·青麟X中规院｜和五位建筑学者一起，设计未来乡村建筑。
        </Content>
        <Box center>
          <Image src='https://i.loli.net/2020/09/26/9c1hdtmYUiGxsje.png' />
        </Box>

        <Title>媒体关注</Title>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          laboriosam cumque velit quae praesentium perspiciatis, perferendis
          quaerat laborum nam consequatur sequi, non maiores porro error sit!
          Voluptatem magnam perferendis consectetur.
        </Content>

        <Title>视频分享</Title>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          alias magni at. Commodi quas ad alias saepe a officia consequuntur
          cumque, veniam et mollitia consequatur facere, optio est, expedita ab.
        </Content>

        <Title>感悟分享</Title>
        <Content>
          <Headline>1、特别活动 | 我“眼中”的萤萤书屋</Headline>
          萤萤公益书屋建成已有大半年了，漂亮的图书，精彩的活动，有趣的哥哥姐姐，为小朋友们带来丰富多彩的新体验。
        </Content>
        <Box center>
          <Image src='https://i.loli.net/2020/09/26/SO6mVtBMoveCXib.png'></Image>
        </Box>
        <Content>
          小朋友们，你们喜欢萤萤书屋么，它跟你们想象的书屋一样么?
          能说说你们心目中的书屋是什么样的么?让我们抓住“六一”的小尾巴，发布“我‘眼中‘的萤萤书屋”作品征集活动，来了解你们眼中的萤萤书屋或你们想象中的萤萤书屋，非常期待看到你们的作品哟~
        </Content>
        <Content>
          <div
            css={css`
              strong {
                color: ${theme.secondary};
              }
            `}>
            <strong>活动主题我"眼中"的萤萤书屋</strong>
            <br />
            请描绘或展示出你眼中的萤萤书屋或是你想象中的萤萤书屋（可以与现在的书屋完全不一样哟~）
            <br />
            <br />
            <strong>作品要求作品形式</strong>
            不限，可以是一段文字（需以录音方式提交，不少于2分钟）一幅画（纸张不小于A4大小）一组照片（不少于三张）一个模型（材料不限，建议使用自然或废旧材料）或是任何你能想到的方式{' '}
            <br />
            <br />
            <strong>参与对象</strong> 万涧村及周边村落的小朋友年龄6-16岁 <br />
            <br />
            <strong>截止日期</strong> 2020年9月1日前 <br />
            <br />
            <strong>提交方式</strong>{' '}
            1.录音、照片发送至邮箱541856051@qq.com或微信至刘琳，需备注
            作者+姓名+年龄+联系方式2.
            绘画及其他形式作品可于周日交至图书馆管理员处，背面注明或直接告知管理员作者+姓名+年龄+联系方式，并配有简单的文字说明
          </div>
        </Content>
        <Content>
          <Headline>2、家乡的黄梅戏</Headline>
          <address>陈梦琪，四年级</address><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;今天是七月二十八日，晚上我和妈妈、妹妹一起高高兴兴的去村委会广场看黄梅戏。下了车便是人山人海的老人、小孩和大人们。我第一眼就看到了大屏幕和戏台，演员们都在那里准备着戏剧的开始。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;戏台前面是个大广场，有好多小朋友在那里玩，有的小朋友在打篮球、有的在聊天，还有的小朋友坐在椅子上静静的等待黄梅戏的开始。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;七点三十分黄梅戏开始了，大人们便迫不及待的拿出手机拍视频。今天演出的黄梅戏的剧名为《红梅惊疯》，是黄梅戏传统剧目《牌环记》中的一折。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;故事是说：员外蔡中书中年无子，经过他的妻嫂，将陪嫁丫环红梅配为二房。谁知原配姜氏善妒、蛮横、趁蔡中书离家之际，百般刁难红梅，还无理拷打，蔡中书不放心红梅，中途返家，将她带到田庄藏起来托王强照应。临别时红梅以牌环作为信物。不久，红梅生下儿子，取名蔡春宝。不料姜氏找到田庄，将儿子抢走。红梅一急便疯了，逃出了田庄，幸尔为神人搭救。十六年后春宝长大，中了状元，遇见红梅，用信物母子相认，一家团聚。<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;这出戏表现了一位母亲失子之痛和寻子之心。这出戏让我明白了什么是母子之情，我爱家乡的黄梅戏。
        </Content>
        <Box center>
          <Image src='https://i.loli.net/2020/09/26/v94KThrIn6lANtU.png'></Image>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default RecentPage
