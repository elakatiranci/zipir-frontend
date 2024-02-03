import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Search } from 'lucide-react';

const App: React.FC = () => (
  <>
    <div style={{ margin: '11px 0' }}> 
    <Input  size="large" placeholder="Arama için metin giriniz."  prefix={<Search />} 
    style={{ width: '860px', height: '60px' }}
    />
    </div>
    <br />
    <br />
  </>
);

export default App;