import React from "react";
import { Box } from "reoil";
import Content from "../components/Content";
import Image from "../components/Image";
import MainLayout from "../components/MainLayout";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { theme } from "../theme";
import { FaUserPlus, FaRegHandshake } from "react-icons/fa";

// 首页
const JoinPage = () => {
  return (
    <MainLayout row>
      <Sidebar titles={["涧行者简介", "涧行团队"]}></Sidebar>

      <Box stretch>
        <Title>涧行者简介</Title>
        <Content>
          随着大量青壮年外出务工，妇女、老人和儿童成为万涧村的主要群体，但由于专业知识技能缺乏、交通不便、信息闭塞等原因，留守群体面临着不同的发展问题。拟成立的潜山市万涧村涧行者乡村服务发展中心，旨在引导妇女群体积极发掘村庄优势资源，通过自我组织、自我服务，以实际行动支持农村妇女发展、儿童教育和乡村养老等问题，积极推动乡村可持续发展，构建城乡友好型社区，积极参与到传统村落保护乃至乡村振兴事业中去。
        </Content>
        {/* <Box center>
          <Image src='https://i.loli.net/2020/09/26/VHlkZx1ongGdrzP.png' />
        </Box> */}

        <Title>涧行团队</Title>
        <Content>
          整合乡村妇女优势，引导妇女参与乡村社区发展，同时关注儿童、养老、生态农业和扶贫等事业发展，构建城乡友好型融合社区。
        </Content>
        {/* <Box center>
          <Image src='https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        </Box> */}
      </Box>
    </MainLayout>
  );
};

export default JoinPage;
