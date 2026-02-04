const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
🎉🥳สุขสันต์วันเกิด🎊 🎂
ดีใจรึป่าว ไม่อวยพรอะไรหรอก เชื่อฟังฉันบ้าง
กวนประสาทให้น้อยลง ยอมรับผิดให้มากขึ้น 
แล้วชีวิตจะสงบสุข ก็จะยังอยู่ข้างๆเสมอ 
ถ้าเธอไม่ขี้เกียจทะเลาะกันซะก่อน ❤️
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
