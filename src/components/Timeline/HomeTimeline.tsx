import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const HomeTimeline: React.FC = () => (
  <Timeline 
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
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-06-2024 Anne Doğum Sonrası Kontrol Randevusu',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-06-2024 Çocuk Kan Değer Kontrol Randevusu',
      },
      {
        children: '13-07-2024 Anne Kan Testi',
      },
      {
        children: '21-07-2024 Anne Lohusa Aşı 1',
      },
      {
        children: '27-07-2024 Anne Lohusa Aşı 2',
      },
      {
        children: '12-08-2024 Grip Aşısı',
      },
      {
        children: '10-09-2024 Grip Aşısı 2',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-10-2024 Bebek Rutin Kontrol Randevusu',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'purple',
        children: '08-11-2024 Anne Rutin Kontrol Randevusu',
      },
      {
        children: '12-12-2024 Anne Sezaryen Kontrol',
      },
    ]}
  />
);

export default HomeTimeline;