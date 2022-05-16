const arr = Array.from(Array(100), (_, i) => i + 1);

const Practice04 = () => {
  const c = (b) => alert(b);
  const a = arr.map(b => {
    return <button onClick={ () => c(b) } key={ b }>{ b }</button>;
  });

  return (
    <div>
      { a }
    </div>
  );
}

export default Practice04;