document.getElementById('tab-buttons-container').addEventListener('click', function(event) {
    const target = event.target.closest('button[data-tab]');
    if (!target) return;

    const tab = target.getAttribute('data-tab');

    // Remove 'active' class from all buttons and add 'active' class to the clicked button
    document.querySelectorAll('#tab-buttons-container button').forEach(button => {
        button.classList.remove('active-tab-madarek');
    });
    target.classList.add('active-tab-madarek');

    // Hide all tab content divs and show the selected one
    document.querySelectorAll('[id^="tab-content-"]').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`tab-content-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-content-${tab}`).classList.add('flex');
});

document.getElementById('tab-buttons-loan').addEventListener('click', function(event) {
    const target = event.target.closest('div[data-tab-vam]');
    if (!target) return;

    const tab = target.getAttribute('data-tab-vam');

    // Remove 'active' class from all buttons and add 'active' class to the clicked button
    document.querySelectorAll('#tab-buttons-loan div').forEach(button => {
        button.classList.remove('active-tab-loan');
    });
    target.classList.add('active-tab-loan');

    // Hide all tab content divs and show the selected one
    document.querySelectorAll('[id^="tab-content-"]').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`tab-content-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-content-${tab}`).classList.add('flex');
});

document.getElementById('tab-buttons-zemanat').addEventListener('click', function(event) {
    const target = event.target.closest('div[data-tab-zemanat]');
    if (!target) return;

    const tab = target.getAttribute('data-tab-zemanat');

    // Remove 'active' class from all buttons and add 'active' class to the clicked button
    document.querySelectorAll('#tab-buttons-zemanat div').forEach(button => {
        button.classList.remove('active-tab-loan');
    });
    target.classList.add('active-tab-loan');

    // Hide all tab content divs and show the selected one
    document.querySelectorAll('[id^="tab-zemanat-"]').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`tab-zemanat-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-zemanat-${tab}`).classList.add('flex');
});

document.getElementById('tab-selector-section').addEventListener('click', function(event) {
    const target = event.target.closest('button[data-button]');
    if (!target) return;

    const tab = target.getAttribute('data-button');

    // Remove 'active' class from all buttons and add 'active' class to the clicked button
    document.querySelectorAll('#tab-selector-section button').forEach(button => {
        button.classList.remove('border-b-2');
        button.classList.remove('border-primary-500');
    });
    target.classList.add('border-b-2');
    target.classList.add('border-primary-500');

    // Hide all tab content divs and show the selected one
    document.querySelectorAll('[id^="content-"]').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`content-${tab}`).classList.remove('hidden');
    document.getElementById(`content-${tab}`).classList.add('flex');
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            previousSlide();
        }
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function previousSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    }

});