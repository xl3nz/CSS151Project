import { useMemo, useState } from 'react';
import lVector from '../../assets/user/l-vector.svg';
import rVector from '../../assets/user/r-vector.svg';
import './CalendarContainer.css';

const WEEKDAYS = ['Mo', 'Tu', 'Wed', 'Th', 'Fr', 'Sa', 'Su'];

const buildMonthCells = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = 0; i < 42; i += 1) {
    const dayValue = i - startOffset + 1;

    if (dayValue <= 0) {
      cells.push({
        day: daysInPrevMonth + dayValue,
        inCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth + dayValue),
      });
      continue;
    }

    if (dayValue > daysInMonth) {
      cells.push({
        day: dayValue - daysInMonth,
        inCurrentMonth: false,
        date: new Date(year, month + 1, dayValue - daysInMonth),
      });
      continue;
    }

    cells.push({
      day: dayValue,
      inCurrentMonth: true,
      date: new Date(year, month, dayValue),
    });
  }

  return cells;
};

export const CalendarContainer = () => {
  const [viewDate, setViewDate] = useState(new Date(2026, 2, 1));
  const today = new Date();

  const monthLabel = useMemo(
    () => viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    [viewDate],
  );

  const cells = useMemo(() => buildMonthCells(viewDate), [viewDate]);

  const goPrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className="admin-calendar-container">
      <div className="admin-calendar-shell">
        <div className="admin-calendar-shell-bg" />

        <div className="admin-calendar-new-event">
          <div className="admin-calendar-new-event-main" />
          <div className="admin-calendar-new-event-side" />
          <div className="admin-calendar-new-event-label">Add New Event</div>
          <div className="admin-calendar-new-event-icon">+</div>
        </div>

        <div className="admin-calendar-panel" />
        <div className="admin-calendar-heading">Calendar</div>

        <div className="admin-calendar-grid-wrap">
          <div className="admin-calendar-grid">
            <div className="calendar-header-row">
              <button className="calendar-arrow-button" onClick={goPrevMonth} type="button" aria-label="Previous month">
                <img className="calendar-arrow-icon" alt="Previous" src={lVector} />
              </button>

              <div className="calendar-month-title">{monthLabel}</div>

              <button className="calendar-arrow-button" onClick={goNextMonth} type="button" aria-label="Next month">
                <img className="calendar-arrow-icon" alt="Next" src={rVector} />
              </button>
            </div>

            <div className="calendar-divider" />

            <div className="calendar-weekdays">
              {WEEKDAYS.map((weekday) => (
                <div key={weekday} className="calendar-weekday">
                  {weekday}
                </div>
              ))}
            </div>

            <div className="calendar-days-grid">
              {cells.map((cell) => {
                const isToday =
                  cell.date.getFullYear() === today.getFullYear() &&
                  cell.date.getMonth() === today.getMonth() &&
                  cell.date.getDate() === today.getDate();

                return (
                  <div
                    key={cell.date.toISOString()}
                    className={`calendar-day-cell ${cell.inCurrentMonth ? 'is-current-month' : 'is-outside-month'} ${isToday ? 'is-today' : ''}`.trim()}
                  >
                    {cell.day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarContainer;
