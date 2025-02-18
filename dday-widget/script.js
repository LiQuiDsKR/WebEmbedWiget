document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const settings = document.getElementById("settings");
    const toggleBtn = document.getElementById("toggleBtn");
    const bgPreview = document.getElementById("bgPreview");
    const textPreview = document.getElementById("textPreview");
    const ddayText = document.getElementById("dday");
    const customText = document.getElementById("customText");

    // 📌 미리 지정된 색상 목록
    const bgColors = [
        "#ff9a9e", // 로즈 핑크
        "#ff758f", // 살짝 채도 높은 핑크
        "#ffdde1", // 베이비 핑크
        "#ff4f79", // 밝은 마젠타
        "#e63946", // 클래식 레드

        "#ffb6b9", // 부드러운 코랄 핑크
        "#ff80ab", // 핑크 + 푸시아
        "#f48fb1", // 연한 장미색
        "#d500f9", // 강렬한 퍼플
        "#b39ddb", // 부드러운 퍼플
        "#9575cd", // 라벤더 퍼플

        "#f3c4fb", // 연한 라일락
        "#e1bee7", // 연보라
        "#ba68c8", // 선명한 퍼플
        "#9c27b0", // 보라 + 바이올렛
        "#6a0dad",  // 딥 퍼플


        "#f8e9a1", // 파스텔 옐로우
        "#aed9e0", // 부드러운 민트
        "#b8f2e6", // 연한 아쿠아 블루  
      ];
    const textColors = ["#ffffff","#bbbbbb", "#999999", "#666666", "#333333", "#000000"];
    
    let bgIndex = 0;
    let textIndex = 0;

    // 📌 URL 파라미터에서 값 가져오기
    const params = new URLSearchParams(window.location.search);
    const text = params.get("text") || "텍스트";
    const targetDate = params.get("date");

    // 텍스트 업데이트
    customText.textContent = text;

    if (targetDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(targetDate);
        const diffDays = Math.floor((selectedDate - today) / (1000 * 60 * 60 * 24));
        ddayText.textContent = `${diffDays > 0 ? Math.abs(diffDays) : Math.abs(diffDays) + 1}일`;
    }

    // 📌 토글 버튼 (설정 모드 ↔ 기본 모드)
    toggleBtn.addEventListener("click", function () {
        if (settings.style.display === "none" || settings.style.display === "") {
            settings.style.display = "flex";
            display.style.display = "none";
        } else {
            settings.style.display = "none";
            display.style.display = "flex";
        }
    });

    // 📌 색상 선택 (배경색)
    function updateBgColor() {
        document.getElementById("widget").style.backgroundColor = bgColors[bgIndex];
        bgPreview.style.backgroundColor = bgColors[bgIndex];
    }

    document.getElementById("bgLeft").addEventListener("click", function () {
        bgIndex = (bgIndex - 1 + bgColors.length) % bgColors.length;
        updateBgColor();
    });

    document.getElementById("bgRight").addEventListener("click", function () {
        bgIndex = (bgIndex + 1) % bgColors.length;
        updateBgColor();
    });

    // 📌 색상 선택 (글씨색)
    function updateTextColor() {
        document.getElementById("widget").style.color = textColors[textIndex];
        textPreview.style.backgroundColor = textColors[textIndex];
    }

    document.getElementById("textLeft").addEventListener("click", function () {
        textIndex = (textIndex - 1 + textColors.length) % textColors.length;
        updateTextColor();
    });

    document.getElementById("textRight").addEventListener("click", function () {
        textIndex = (textIndex + 1) % textColors.length;
        updateTextColor();
    });

    // 초기 색상 적용
    updateBgColor();
    updateTextColor();
});
