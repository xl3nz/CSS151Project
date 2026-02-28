import './Number.css';

export const Number = ({ property1 = 'default', className = '', text = '1', divClassName = '' }) => {
  return (
    <div className={`calendar-day-number ${property1} ${className}`.trim()}>
      {['variant-2', 'variant-3'].includes(property1) && <div className="calendar-day-number-highlight" />}
      <div className={`calendar-day-number-label ${divClassName}`.trim()}>{text}</div>
    </div>
  );
};
