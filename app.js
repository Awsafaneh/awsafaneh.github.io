document.getElementById('lang-ar').addEventListener('click', function() {
    document.documentElement.lang = 'ar';
    document.getElementById('main-title').textContent = 'مرحبًا بك في SMMNPAN';
    document.getElementById('description').textContent = 'نحن نقدم خدمات تسويق رقمي مبتكرة تساعدك على الوصول إلى جمهورك المستهدف.';
    document.getElementById('cta-button').textContent = 'ابدأ الآن';
    document.getElementById('service1').textContent = 'إدارة حسابات السوشيال ميديا';
    document.getElementById('service2').textContent = 'تحسين محركات البحث (SEO)';
    document.getElementById('service3').textContent = 'إعلانات ممولة';
    document.getElementById('service4').textContent = 'تصميم محتوى';
    document.getElementById('service5').textContent = 'تطوير مواقع';
    document.getElementById('contact-info').textContent = 'للتواصل معنا، يمكنك استخدام البريد الإلكتروني أو عبر WhatsApp.';
    document.querySelector('footer p').textContent = '© 2025 SMMNPAN. جميع الحقوق محفوظة.';
});

document.getElementById('lang-en').addEventListener('click', function() {
    document.documentElement.lang = 'en';
    document.getElementById('main-title').textContent = 'Welcome to SMMNPAN';
    document.getElementById('description').textContent = 'We offer innovative digital marketing services to help you reach your target audience.';
    document.getElementById('cta-button').textContent = 'Get Started';
    document.getElementById('service1').textContent = 'Social Media Management';
    document.getElementById('service2').textContent = 'SEO';
    document.getElementById('service3').textContent = 'Paid Ads';
    document.getElementById('service4').textContent = 'Content Design';
    document.getElementById('service5').textContent = 'Website Development';
    document.getElementById('contact-info').textContent = 'To contact us, you can use email or WhatsApp.';
    document.querySelector('footer p').textContent = '© 2025 SMMNPAN. All rights reserved.';
});
