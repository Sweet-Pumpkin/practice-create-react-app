import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';


// 날짜 한글로 변환
dayjs.locale("ko");

// 한국 시간대로 변환
dayjs.extend(utc);
dayjs.extend(timezone);

export default function Dayjs() {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjstDate = newDayjsDate.add(1, "week");
  
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBrithDayChange = (e) => {
    setDay(dayjs(e.target.value, "YYYY-MM-DD").format("dddd"));
  }

  return (
    <div>
      <h1>Dayjs</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjstDate.format()}
      </div>
      <br />
      <div>Summer Time</div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기
        {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기
        {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>Leap Year</div>
      <div>
        2017년 1월 1일에서 1년 빼기
        {dayjs("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에서 365일 빼기
        {dayjs("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>07-17-2021을 2021sus 7월 17일로 변경하기</div>
      <div>
        {dayjs("07-17-2021").format("YYYY년 M월 D일")}
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
        {`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}시간`}
      </div>
    </div>
  )
}
