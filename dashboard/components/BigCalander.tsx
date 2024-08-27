"use client";
import React, { useState } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>("work_week");

  const handleOneChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: '98%' }}
      onView={handleOneChangeView}
      min={new Date(2024, 7, 12, 8, 0, 0)}
      max={new Date(2024, 7, 12, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
