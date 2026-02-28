import './Days.css';

export const Days = ({ className = '', text = 'Mon', divClassName = '' }) => {
  return (
    <div className={`calendar-weekday-item ${className}`.trim()}>
      <div className={`calendar-weekday-label ${divClassName}`.trim()}>{text}</div>
    </div>
  );
};
