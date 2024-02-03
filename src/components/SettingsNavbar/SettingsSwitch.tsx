import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import {Switch} from "@nextui-org/react";

const App: React.FC = () => (
  <Space className="hidden sm:flex gap-4 bg-white padding-5px w-full p-8" direction="vertical">
     <Switch defaultSelected color="secondary">Gizlilik Ayarı Kontrolü</Switch><br/>
     <Switch defaultSelected color="secondary">Bildirimler</Switch><br/>
     <Switch defaultSelected color="secondary">Otomatik Dil Seçimi</Switch><br/>
     <Switch defaultSelected color="secondary">Karanlık Mod Seçimi</Switch><br/>
     <Switch defaultSelected color="secondary">Profil İzinleri</Switch>
  </Space>
);

export default App;