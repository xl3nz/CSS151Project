import { Days } from './Days';
import { Number } from './Number';
import lVector from '../../assets/user/l-vector.svg';
import line from '../../assets/user/line.png';
import rVector from '../../assets/user/r-vector.svg';
import './CalendarContents.css';

export const CalendarContents = () => {
  return (
    <div className="calendar-contents-box">
      <div className="calendar-contents">
        <div className="calendar-contents-surface" />

        <div className="marker" />

        <div className="calendar-right-arrow">
          <img className="r-vector" alt="R vector" src={rVector} />
        </div>

        <div className="calendar-left-arrow">
          <img className="l-vector" alt="L vector" src={lVector} />
        </div>

        <div className="calendar-contents-month-title">March 2026</div>

        <img className="line" alt="Line" src={line} />

        <Days className="days-instance" divClassName="design-component-instance-node" text="Mo" />
        <Days className="days-2" divClassName="days-3" text="Tu" />
        <Days className="days-4" divClassName="days-5" text="Wed" />
        <Days className="days-6" divClassName="days-7" text="Th" />
        <Days className="days-8" divClassName="days-9" text="Fr" />
        <Days className="days-10" divClassName="days-3" text="Sa" />
        <Days className="days-11" divClassName="days-7" text="Su" />
        <Number className="number-instance" divClassName="number-2" property1="default" text="23" />
        <Number className="number-3" divClassName="number-2" property1="default" text="24" />
        <Number className="number-4" divClassName="number-2" property1="default" text="25" />
        <Number className="number-5" divClassName="number-2" property1="default" text="26" />
        <Number className="number-6" divClassName="number-2" property1="default" text="27" />
        <Number className="number-7" divClassName="number-2" property1="default" text="28" />
        <Number className="number-8" divClassName="number-9" property1="default" text="1" />
        <Number className="number-10" divClassName="number-9" property1="default" text="8" />
        <Number className="number-11" divClassName="number-9" property1="default" text="7" />
        <Number className="number-12" divClassName="number-9" property1="default" text="6" />
        <Number className="number-13" divClassName="number-9" property1="default" text="13" />
        <Number className="number-14" divClassName="number-9" property1="default" text="14" />
        <Number className="number-15" divClassName="number-9" property1="default" text="15" />
        <Number className="number-16" divClassName="number-9" property1="default" text="20" />
        <Number className="number-17" divClassName="number-9" property1="default" text="21" />
        <Number className="number-18" divClassName="number-9" property1="default" text="22" />
        <Number className="number-19" divClassName="number-9" property1="default" text="19" />
        <Number className="number-20" divClassName="number-9" property1="default" text="18" />
        <Number className="number-21" divClassName="number-9" property1="default" text="17" />
        <Number className="number-22" divClassName="number-9" property1="default" text="16" />
        <Number className="number-23" divClassName="number-2" property1="default" text="3" />
        <Number className="number-24" divClassName="number-2" property1="default" text="4" />
        <Number className="number-25" divClassName="number-2" property1="default" text="5" />
        <Number className="number-26" divClassName="number-2" property1="default" text="2" />
        <Number className="number-27" divClassName="number-2" property1="default" text="1" />
        <Number className="number-28" divClassName="number-9" property1="default" text="31" />
        <Number className="number-29" divClassName="number-9" property1="default" text="30" />
        <Number className="number-30" divClassName="number-9" property1="default" text="26" />
        <Number className="number-31" divClassName="number-9" property1="default" text="28" />
        <Number className="number-32" divClassName="number-9" property1="default" text="29" />
        <Number className="number-33" divClassName="number-9" property1="default" text="26" />
        <Number className="number-34" divClassName="number-9" property1="default" text="25" />
        <Number className="number-35" divClassName="number-9" property1="default" text="24" />
        <Number className="number-36" divClassName="number-9" property1="default" text="23" />
        <Number className="number-37" divClassName="number-9" property1="default" text="5" />
        <Number className="number-38" divClassName="number-9" property1="default" text="12" />
        <Number className="number-39" divClassName="number-40" property1="default" text="4" />
        <Number className="number-41" divClassName="number-9" property1="default" text="9" />
        <Number className="number-42" divClassName="number-9" property1="default" text="10" />
        <Number className="number-43" divClassName="number-9" property1="default" text="11" />
        <Number className="number-44" divClassName="number-9" property1="default" text="3" />
        <Number className="number-45" divClassName="number-9" property1="default" text="2" />
      </div>
    </div>
  );
};
