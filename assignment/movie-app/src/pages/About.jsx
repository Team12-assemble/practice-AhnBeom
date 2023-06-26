import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <main>
      <section>
        <h1>About</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            placeholder="여행가고 싶은 지역"
          ></input>
          <button type="submit">검색</button>
        </form>
      </section>
    </main>
  );
};
export default About;
