import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  donghun: {
    id: 1,
    name: "정동훈",
    description: "리액트 강의를 담당하고 있는 사람입니다.",
  },
  herry: {
    id: 2,
    name: "민호",
    description: "인사이드 아웃 이사장입니다.",
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];

  return (
    <main>
      <section>
        <h1>Profile</h1>
        <h3>
          {profile.name}({username})가 무엇을 하는 사람일까요?
        </h3>
        <p>{profile.description}</p>
      </section>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </main>
  );
};
export default Profile;
