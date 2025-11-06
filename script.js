// 좌석 남은 수 랜덤 갱신
function updateSeats() {
  const remaining = Math.floor(Math.random() * 60);
  const seatEl = document.getElementById("seatCount");
  if (seatEl) seatEl.textContent = remaining;
}
setInterval(updateSeats, 3000);
updateSeats();

// 카카오페이 결제 시뮬레이션
const payBtn = document.getElementById("payBtn");
if (payBtn) {
  payBtn.addEventListener("click", () => {
    const price = document.getElementById("ticket").value;
    alert(`카카오페이 결제창 (모의)\n결제금액: ${price}원`);
    window.location.href = "success.html";
  });
}

// 관리자 로그인
function adminLogin() {
  const input = document.getElementById("adminPass").value;
  if (input === "focus0309") {
    document.getElementById("dashboard").style.display = "block";
    document.querySelector("h2").textContent = "관리자 대시보드";
    document.getElementById("salesCount").textContent = Math.floor(Math.random() * 30 + 5);
    document.getElementById("salesTotal").textContent = Math.floor(Math.random() * 200000 + 50000);
    document.getElementById("seatRate").textContent = Math.floor(Math.random() * 90);
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}

// 모바일 메뉴 열고 닫기 기능
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}
