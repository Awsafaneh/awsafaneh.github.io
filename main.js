// جافا سكريبت لتفعيل الأزرار مثل إضافة إلى العربة، وحركات تفاعلية بسيطة
document.addEventListener('DOMContentLoaded', function () {

    // إضافة المنتج إلى العربة
    const addToCartButtons = document.querySelectorAll('.btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('تم إضافة المنتج إلى العربة!');
        });
    });

    // تفعيل الحركات عند التمرير (Scroll) باستخدام AOS
    AOS.init({
        duration: 1200,  // مدة الأنيميشن
        offset: 100,     // الإزاحة
    });

    // العربة: إزالة المنتج
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = button.closest('.cart-item');
            item.remove();
            alert('تم إزالة المنتج من العربة!');
        });
    });

});
