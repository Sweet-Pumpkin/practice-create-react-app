import Link from './Link';

const RandomEmail = (props) => {
  return (
    <div>
      Email: {props.someData}!
      <br />
      <Link href='/'>reset</Link>
    </div>
  )
}

const exampleApi = (gender) => fetch(`https://randomuser.me/api/?gender=${gender}`, {
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(res => {
  const randomUser = res.results[0];
  console.log(randomUser);
  return `${randomUser.gender} - ${randomUser.name.first}`;
});

// Server Side에서 사용자 요청마다 실행될 javascript
export const getServerSideProps = async (props) => {
  const gender = props.query.gender;
  if (gender === 'male' || gender === 'female') {
    const someData = await exampleApi(gender);
    return { props: { someData } };
  } else {
    return { props: { someData: '' } };
  }
}

export default RandomEmail;