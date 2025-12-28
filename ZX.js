
document.addEventListener('DOMContentLoaded', () => {
  let about = document.getElementById('aboutme');

  function showAbout() {
    let triggerPoint = about.offsetTop - window.innerHeight + 300;
    if (window.scrollY >= triggerPoint) {
      about.classList.add('show-about');
      window.removeEventListener('scroll', showAbout);
    }
  }

  window.addEventListener('scroll', showAbout);
  showAbout(); 
});



   
  
// ربط الأزرار
const homeBtn = document.getElementById('home');
const aboutBtn = document.getElementById('about');
const workBtn = document.getElementById('my');
const servicesBtn = document.getElementById('services');

// دالة Scroll بالقيم الرقمية
function scrollToPixels(px) {
  window.scrollTo({
    top: px,
    behavior: 'smooth'
  });
}

// اضبط القيم حسب موقع كل قسم على الصفحة
homeBtn.addEventListener('click', () => scrollToPixels(0));       // بداية الصفحة
aboutBtn.addEventListener('click', () => scrollToPixels(600));    // غير 800 حسب موقع About
workBtn.addEventListener('click', () => scrollToPixels(1600));    // غير 1600 حسب Work
servicesBtn.addEventListener('click', () => scrollToPixels(2850)); // غير 2400 حسب Services





const scrollBtn = document.getElementById('scrollTop');

// إظهار الزر عند الوصول لـ 500px
window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

// الضغط على الزر للرجوع للأعلى بسلاسة
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});