function Greeting({ name }) {
  return <h1>안녕하세요, {name}씨!</h1>;
}

export default function Practice03() {
  return (
    <>
      <Greeting name="홍길동" />
    </>
  );
}
