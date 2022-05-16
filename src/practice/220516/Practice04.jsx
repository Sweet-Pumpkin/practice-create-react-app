const arr = Array.from(Array(100), (_, i) => i + 1);

const Practice04 = () => {
  const a = arr.map(b => {
    const c = () => alert(b);
    return <button onClick={ c } key={ b }>{ b }</button>;
  });
  return (
    <div>
      { a }
    </div>
  );
}

export default Practice04;