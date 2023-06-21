const root = document.getElementById("root");

function Container() {
  return (
    <>
      <header>
        <i class="fa-solid fa-arrow-left"></i>
        <h1>JUDI🐰Stagram</h1>
        <i class="fa-solid fa-paper-plane"></i>
      </header>
      <main>
        <section class="profileImg">
          <img src="./my_pic02.png" alt="내 프로필 사진" class="image" />
          <section class="imgBottom">
            <section class="icons">
              <section class="iconsGroup">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-regular fa-comment"></i>
              </section>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </section>
            <section class="message">
              <p class="sub">좋아하는 사람 judi 외 2401명</p>
              <article>
                <a href="https://judidev.tistory.com/">My blog</a>
                <a href="https://github.com/mibu119">My GitHub</a>
              </article>
            </section>
          </section>
        </section>
        <article class="profileContent">
          <section class="upper">
            <section class="upperside">
              <section class="myInfo">
                <div class="left">
                  <p>여자</p>
                  <p>👩🏻‍💻</p>
                </div>
                <div class="center">
                  <p>1996.04.08</p>
                  <p>생년월일</p>
                </div>
                <div class="right">
                  <p>군포</p>
                  <p>거주지</p>
                </div>
              </section>
              <section class="contact">
                <div class="contact01">
                  <span>010-0000-000</span>
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div class="contact02">
                  <span>horang296@gmail.com</span>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </section>
            </section>
            <img
              src="./my_picture.JPG"
              alt="내 프로필 사진"
              class="image side"
            ></img>
          </section>
          <section class="state">
            안녕하세요, 주니어 프론트엔드 개발자입니다!
          </section>
          <section class="title01">My Profile</section>
          <section class="title02">My Stacks</section>
          <article class="content01">
            <table>
              <tr>
                <th>MBTI</th>
                <td>ENTP</td>
              </tr>
              <tr>
                <th>Hobby</th>
                <td>유튜브 시청,영어 필사</td>
              </tr>
              <tr>
                <th>Love</th>
                <td>수영, 고양이, 콜드브루</td>
              </tr>
              <tr>
                <th>Interest</th>
                <td>메타버스, VR, IOS</td>
              </tr>
              <tr>
                <th>LookingFor</th>
                <td>반려동물 스타트업 / 외국계 기업</td>
              </tr>
              <tr>
                <th>Goal</th>
                <td>IOS 개발자, 해외 취업, PO(Product Owner)</td>
              </tr>
            </table>
          </article>
          <article class="content02">
            <section class="graphTable">
              <section class="graphName">
                <p>Javascript</p>
                <p>React</p>
                <p>Typescript</p>
                <p>Emotion</p>
                <p>Next.js</p>
              </section>
              <section class="graphLine">
                <div class="graph js">80%</div>
                <div class="graph react">60%</div>
                <div class="graph ts">50%</div>
                <div class="graph emotion">70%</div>
                <div class="graph next">30%</div>
              </section>
            </section>
          </article>
        </article>
      </main>
    </>
  );
}

ReactDOM.render(<Container />, root);
