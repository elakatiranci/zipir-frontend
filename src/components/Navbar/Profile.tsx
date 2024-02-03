import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Divider, Tooltip } from 'antd';

const App: React.FC = () => (
  <>
    <Avatar.Group
      maxCount={3}
      maxPopoverTrigger="click"
      size="large"
      maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
    >
      <Avatar src="https://i.aydinlik.com.tr/storage/files/images/2023/03/22/ekran-goruntusu-2023-03-22-144111-eeXg.jpg" />
      <Tooltip title="Ant User" placement="top">
      </Tooltip>
    </Avatar.Group>
  </>
);

export default App;

