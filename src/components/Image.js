import React from "react";
import { Box, Image as Img } from "reoil";
import { theme } from "../theme";

const Image = ({ src, props }) => (
  <Box center mb={3}>
    <Img
      src={src}
      style={{
        boxShadow: theme.boxShadow,
        borderRadius: "4px",
        maxHeight: 600,
      }}
      {...props}
    />
  </Box>
);

export default Image;
