const { useCounter } = require("./custom-hooks/Counter");

export default function UseCount() {
  const { count, onClick } = useCounter(100);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={onClick}></button>
    </div>
  );
}
