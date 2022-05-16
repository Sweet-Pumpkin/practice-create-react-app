function Practice03() {
  const arr = Array.from(Array(100), (_, i) => i + 1);

  // const a = arr.map(b => b % 7 === 0 ? <button key={ b }>7의 배수</button> : b % 10 === 0 ? null : <button key={ b }>{ b }</button>);

  const c = arr.map(d => {
    if (d % 7 === 0) {
      return <button key={ d }>7의 배수</button>;
    } else if (d % 10 === 0) {
      return false;
    } else {
      return <button key={ d }>{ d }</button>;
    }
  })

  // const btn = arr.map(function(el) {
  //   switch (true) {
  //     case (el % 7 === 0) :
  //       return <button key={ el }>7의 배수</button> 
  //     case (el % 10 === 0) :
  //       return false
  //     default :
  //       return <button key={ el }>{ el }</button>
  //   }
  // }
  // );

  return (
    <div>
      { c }
    </div>
  ); 
}

export default Practice03;