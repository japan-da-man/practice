import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FullCalendar from '@fullcalendar/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FullCalendar
  events={[
    { title: "event 1", start: "2021-06-01" }, // endは省略可
    { title: "event 2", start: "2021-06-03", end: "2021-06-05" }, // endに指定した日付は含まないので注意
    {
      title: "event 3",
      start: "2021-06-04T10:00:00", // 時間を指定するときはISO 8601
    },
  ]}
  />
);