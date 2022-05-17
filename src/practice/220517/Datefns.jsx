import React, { useState, useRef } from 'react';

import { add, format, sub, differenceInHours } from 'date-fns';
import addWeeks from 'date-fns/addWeeks';
import ko from 'date-fns/locale/ko';
import { format as timeZoneFormat, toDate } from 'date-fns-tz';


export default function Datefns() {
  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const cloneNewDateFnstDate = addWeeks(newDateFnsDate, 1);
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBrithDayChange = (e) => {
    setDay(format(new Date(e.target.value), "EEEE", { locale: ko }));
  }

  return (
    <div>
      <h1>Datefns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(cloneNewDateFnstDate, "yyyy-MM-dd")}
      </div>
      <br />
      <div>Summer Time</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기
        {timeZoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }), 
            { days: 1 }
            ), 
            "yyy-MM-dd HH:mm:ssXXX", 
            {
              timeZone: "America/New_York"
            }
          )}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기
        {timeZoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }), 
            { days: 1 }
            ), 
            "yyy-MM-dd HH:mm:ssXXX", 
            {
              timeZone: "America/New_York"
            }
          )}
      </div>
      <br />
      <div>Leap Year</div>
      <div>
        2017년 1월 1일에서 1년 빼기
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
      </div>
      <div>
        2017년 1월 1일에서 365일 빼기
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
      </div>
      <br />
      <div>07-17-2021을 2021sus 7월 17일로 변경하기</div>
      <div>
        {format(new Date("07-17-2021"), "yyyy년 M월 d일")}
      </div>
      <br />
      <div>요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBrithDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 3:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${differenceInHours(new Date("2021-07-17 03:00"), new Date("2021-07-18 02:00"))}시간`}
      </div>
    </div>
  )
}
