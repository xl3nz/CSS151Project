import { useMemo, useState } from 'react';
import lVector from '../../assets/user/l-vector.svg';
import rVector from '../../assets/user/r-vector.svg';
import './Calendar.css';

const WEEKDAYS = ['Mo', 'Tu', 'Wed', 'Th', 'Fr', 'Sa', 'Su'];

const buildMonthCells = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7; // Monday first
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

export const Calendar = () => {
  const [viewDate, setViewDate] = useState(new Date(2026, 2, 1)); // March 2026 default
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
    <div className="calendar-box">
      <div className="calendar-layout">
        <div className="calendar-title">Calendar</div>

        <div className="user-calendar-surface">
          <div className="user-calendar-glass">
            <div className="calendar-contents-wrapper">
              <div className="calendar-contents">
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
      </div>
    </div>
  );
};

export default Calendar;
