// 눈 생성 함수
function createSnowflake(event) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // 클릭한 위치에서 눈이 나타나게 하기 위해 left와 top 값 설정
  snowflake.style.left = `${event.clientX - 25}px`; // 눈의 좌측 위치
  snowflake.style.top = `${event.clientY - 25}px`; // 눈의 상단 위치

  // 눈 크기와 애니메이션 속도를 랜덤하게 설정
  snowflake.style.fontSize = `${Math.random() * 2 + 1}rem`; // 크기: 1rem ~ 3rem 사이
  snowflake.style.animationDuration = `${Math.random() * 3 + 3}s`; // 애니메이션 시간: 3s ~ 6s 사이

  // 눈을 body에 추가
  document.body.appendChild(snowflake);

  // 애니메이션이 끝난 후 눈을 제거
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// 클릭 이벤트를 통해 눈 생성
document.body.addEventListener("click", createSnowflake);

// 클릭 이벤트를 통해 눈 생성
document.body.addEventListener("click", createSnowflake);

// 크리스마스 타이머 함수
function updateCountdown() {
  const christmas = new Date(new Date().getFullYear(), 11, 25); // 12월 25일
  const now = new Date();
  if (now.getMonth() === 11 && now.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1); // 다음 해로 이동
  }

  const timeDifference = christmas - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// 1초마다 업데이트
setInterval(updateCountdown, 1000);
updateCountdown(); // 페이지 로드 시 즉시 실행
