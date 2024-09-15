import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import React from "react";

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

export const Loader: React.FC = () => (
  <div>
    <Spin indicator={antIcon} />
  </div>
);
