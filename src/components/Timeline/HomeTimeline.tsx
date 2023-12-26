import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const HomeTimeline: React.FC = () => (
  <Timeline className='t-xl'
    items={[
      {
        children: '12-12-2023 Grip Aşısı',
      },
      {
        children: '07-01-2024 Kan Testi',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-01-2024 Doktor Randevusu',
      },
      {
        children: '12-02-2024 Kan Testi Tekrar',
      },
      {
        children: '12-03-2024 Rutin Aşı 1',
      },
      {
        children: '12-03-2024 Rutin Aşı 2',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-04-2024 Doktor Randevusu',
      },
      {
        children: '17-05-2024 Diş Kontrolü',
      },
    ]}
  />
);

export default HomeTimeline;