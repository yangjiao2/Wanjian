import React from "react";
import { Box } from "reoil";
import Content from "../components/Content";
import Image from "../components/Image";
import MainLayout from "../components/MainLayout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { theme } from "../theme";
import { FaUserPlus, FaRegHandshake } from "react-icons/fa";
import Headline from "../components/Headline";

// 首页
const SupportPage = () => {
  return (
    <MainLayout row>
      <Sidebar titles={["公益项目", "成为义工", "成为合作伙伴"]}></Sidebar>

      <Box stretch>
        {/* <Title>捐赠说明</Title> */}
        {/* <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          cupiditate voluptate odio dolores velit quia itaque rem doloribus!
          Consequatur doloribus magni eligendi minima itaque nostrum voluptas
          voluptatem suscipit molestiae voluptatibus.
        </Content> */}

        <Title>公益项目</Title>
        <Content>
          潜山市万涧村涧行者乡村服务发展中心创办单位——潜山市回味乡愁农民专业合作社的发起者刘琳，自2018年6月开始由中国城市规划设计研究院派驻到龙潭乡万涧村从事古村落保护工作。刘琳向市妇联一行介绍，该合作社以万涧村传统村落保护项目为背景，村民自愿以现金、闲置房屋及土地租金折价入股等方式加入，自主经营、自负盈亏，于2018年8月正式成立，至今已经发展成为集生态农业、初加工、服务业、传统村落保护与发展等于一体的综合性合作社。2019年5月合作社发起的“社员之家”是拟注册的潜山市万涧村涧行者乡村服务发展中心的前身，义务为村庄举办各类培训活动、乡村教育系列活动等，为后续活动开展积累了经验和人力基础。万涧村涧行者乡村服务发展中心建成后，将以妇女群体为主，在妇女发展、乡村教育、农村养老等领域为乡村振兴事业助力。
        </Content>

        <Title>成为义工</Title>
        <Box height={300} cover borderRadius={4} center bg="black" mb={3}>
          <img
            style={{ opacity: 0.6 }}
            src="https://images.pexels.com/photos/1000444/pexels-photo-1000444.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <Box position="absolute" center color="white">
            <Box style={{ letterSpacing: 2 }} fontSize={3} my={2}>
              加入涧行，成为义工。
            </Box>
            <Box my={2}>涧行的公益事业，需要您的大力支持，请加入我们：</Box>
            <Box
              background={theme.primary}
              p={3}
              borderRadius={4}
              mt={3}
              pointer
            >
              我要加入，成为“涧行义工”
            </Box>
          </Box>
        </Box>
        <Content>
          <strong>亲爱的益友：</strong>
          <br />
          &nbsp;&nbsp;感谢您关注涧行义工！期待有机会与您一起为乡村妇女儿童公益事业做点事情，希望您和我们一样，认同以下对“义工”的界定：
        </Content>
        <Content>
          <strong>义工权利：</strong>
          <br />
          <ul>
            <li>获邀参与基金会组织的论坛等活动（免费）</li>
            <li>获得涧行资讯（免费）</li>
            <li>与专业、高效的团队同行，获得实践机会</li>
            <li>参与涧行者乡村服务发展中心联谊活动（自费）</li>
          </ul>
        </Content>
        <Content>
          <strong>义工义务：</strong>
          <br />
          <ul>
            <li>展示您的天赋</li>
            <li>遵守您的约定</li>
            <li>持续关注和支持涧行者乡村服务发展中心</li>
          </ul>
        </Content>
        <Content>
          <small>
            相关联络或者咨询，请添加涧行小助手为好友，并注明“绿芽义工+姓名”
          </small>
        </Content>

        <Title>成为合作伙伴</Title>
        <Box center>
          <Image src="https://i.loli.net/2020/09/26/kj6oNHgf2IYTuda.png" />
        </Box>
        <Content>
          <Headline>01 陪读计划背景</Headline>
          <p>
            万涧村隶属于安徽省潜山市，地处大别山东麓，背依天柱山，四周竹海环绕，风景秀美。但因地少山多，交通不便等因素，村庄空心化现象十分严重。村内户籍人口2526人中，60%以上村民都不在村中常驻，355名15岁以下儿童中，在村的仅有35人。同样的情况也发生在附近的龙潭村和龙湾村。2018年万涧村撤点并校，万涧、龙潭和龙湾等村庄的留守儿童集中在龙潭村上小学和初中。出村的班车充当了校车，每天往返接送孩子。每周一早晨都是班车超负荷运转的日子，出村的老人、办事的中年、上小学的孩子、走读寄宿的初中生……一辆中巴车往往会超载十余人。
            <br />
            2017年，中国城市规划设计研究院会同北京大学社会学系、土上建筑工作室等机构组成联合团队在万涧村开展传统村落保护实践。在项目推进的过程中，我们发现村庄内留守儿童大多由祖父母照看，处在隔代抚养的状态中。祖父母受年龄和能力限制，往往不能对孩子提供完善的教育，孩子与家长间普遍存在缺乏沟通的问题。同时，村内贫乏的文化生活致使孩子的周末完全被综艺节目、电视剧、短视频和游戏挤占，属于知识和书籍的课余时间少之又少。祖父母和常年在外的父母出于补偿心理，不愿让孩子参与农事劳动，进一步加剧了孩子不了解村庄外部世界却对于生活的村庄一无所知的尴尬……这些现象都迫使联合团队想要去做些什么，让这些孩子能够有更充实更幸福的童年、能够有了解外部世界的渠道、能够在村庄内营造孩子们求知的乐园。
            <br />
            2018年，中国城市规划设计研究院党费定向援助万涧村山区儿童图书馆改造项目，由土上建筑工作室负责建筑设计并提供驻场技术指导。2019年9月建成后的山区儿童图书馆——萤萤公益书屋正式运营。
            <br />
          </p>
        </Content>
        <Box center>
          <Image src="https://i.loli.net/2020/09/26/IyQbecipnNmrAZ8.png" />
        </Box>
        <Content>
          富有童趣的书屋让孩子们能在这一方天地里乐不思蜀，也开始静下来呆上一整天去写作业或是看书。但碍于人力、精力、学识等限制，我们能给这几个村庄孩子带去的陪伴太少，单次活动举办又不足以搭建良性的沟通机制，基于此，我们提出了萤萤公益书屋陪读计划。
        </Content>
        <Content>
          <Headline>02 陪读计划介绍</Headline>
          <p>
            我们希望<strong>以月为单位</strong>，每月至少举办<strong>2</strong>
            <strong>期</strong>，每期邀请<strong>1-2</strong>
            <strong>位</strong>
            关注乡村教育、关注乡村发展的朋友来村里陪孩子们读书或看电影、和孩子们分享自己的见闻与喜乐、邀请孩子们了解自己的专业、跟随孩子们发现乡村的质朴与美好&hellip;&hellip;
            <br /> 我们会同步用<strong>镜头记录陪读者与孩子之间的趣事</strong>，
            <strong>
              在当期活动结束后，以图文、视频等形式保存这份美好并在本公众号进行分享传播。
            </strong>
            <br /> 我们将<strong>每季度</strong>对陪读者进行回访，并组建
            <strong>陪读者社群</strong>
            。在这里，陪读者和村庄间的情感纽带彼此串联，绘制出属于万涧的群体记忆。此外，
            <strong>
              我们将组织历届陪读者同返万涧。无论您是摄影师、记者、规划师、建筑师、艺术家、乡村教育家或是其他关爱乡村的人士，在陪读计划中您都能找到志同道合的伙伴
            </strong>
            。
          </p>
        </Content>
        <Content>
          <Headline>03 陪读要求</Headline>
          <ul>
            <li>不限专业，但要有爱心，有一定特长或足够有趣的人生阅历；</li>
            <li>不限课程内容，但必须积极向上，课程内容需要通过主办方审核；</li>
            <li>
              建议在村停留时长至少有2天1夜，且需要提前和主办方约定时间，一般在周末或节假日。
            </li>
          </ul>
        </Content>
        <Content>
          <Headline>04 陪读计划申请流程</Headline>
          <ul>
            <li>
              有意参加萤萤公益书屋陪读计划的朋友需要提交一份个人陈述、拟开展的课程内容及需要提供的条件、预计开课的时间和其他特殊事项。将以上资料提前2周发送到邮箱948284575@qq.com
            </li>
            <li>以最终双方邮件协商内容为准</li>
            <li>本计划最终解释权归中规院传统村落保护联合团队所有</li>
          </ul>
        </Content>
        <Box center>
          <Image src="https://i.loli.net/2020/09/26/EtKTmQZuekd6Xij.png" />
          萤萤公益书屋，期待和你陪伴儿童；期待和你共建乡村。
        </Box>
      </Box>
    </MainLayout>
  );
};

export default SupportPage;
