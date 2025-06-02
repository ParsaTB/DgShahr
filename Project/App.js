document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.scrollY;

        const navbarDiv = document.getElementById('navbar');
        const loanBtn = document.getElementById('header-loan-btn-mobile');
        const menuBtn = document.getElementById('menu-mobile');
        const mobileLogo = document.getElementById('mobile-logo');

        if (currentScrollTop > 150) {
            navbarDiv.classList.remove('bg-primary-500');
            navbarDiv.classList.add('bg-white');
            loanBtn.classList.remove('bg-white', 'text-black');
            loanBtn.classList.add('bg-primary-500', 'text-white');
            menuBtn.classList.remove('text-white');
            menuBtn.classList.add('text-black');

            mobileLogo.style.filter = 'none';
        } else {
            navbarDiv.classList.remove('bg-white');
            navbarDiv.classList.add('bg-primary-500');
            loanBtn.classList.remove('bg-primary-500', 'text-white');
            loanBtn.classList.add('bg-white', 'text-black');
            menuBtn.classList.remove('text-black');
            menuBtn.classList.add('text-white');

            mobileLogo.style.filter = 'brightness(0) invert(1)';
        }
    });
});



document.getElementById('menu-mobile').addEventListener('click', function(){
    const menuContainer = document.getElementById('menu-container');
    const asideContainer = document.getElementById('aside-container');
    const closeBtn = document.getElementById('closeBtn');

    menuContainer.classList.remove('opacity-0')
    menuContainer.classList.add('opacity-100')
    menuContainer.classList.remove('pointer-events-none')
    menuContainer.classList.add('pointer-events-auto')

    asideContainer.classList.remove('translate-x-full')
    asideContainer.classList.add('translate-x-0')
    
    closeBtn.addEventListener('click' , function closeMenu(){
        menuContainer.classList.add('opacity-0')
        menuContainer.classList.remove('opacity-100')
        menuContainer.classList.add('pointer-events-none')
        menuContainer.classList.remove('pointer-events-auto')
    
        asideContainer.classList.add('translate-x-full')
        asideContainer.classList.remove('translate-x-0')
    });
    
    menuContainer.addEventListener('click' , function closeMenu(){
        menuContainer.classList.add('opacity-0')
        menuContainer.classList.remove('opacity-100')
        menuContainer.classList.add('pointer-events-none')
        menuContainer.classList.remove('pointer-events-auto')
    
        asideContainer.classList.add('translate-x-full')
        asideContainer.classList.remove('translate-x-0')
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loanText = document.getElementById('loan-size-text');
    const loanInp = document.getElementById('loanInp');

    loanInp.addEventListener('input', function() {
        loanText.textContent = new Intl.NumberFormat().format(this.value * 1000000); // Formatting number as you specified in the span
    });
});

function openAnswerBox(faqItem) {
    const arrowSpan = faqItem.querySelector('.arrow-div');
    const answerDiv = faqItem.querySelector('.answer-div');


    answerDiv.classList.toggle('grid-rows-[1fr]');
    answerDiv.classList.toggle('opacity-100');
    arrowSpan.classList.toggle('rotate-180');
}

function faqOpen(item) {
    const headerText = item.querySelector('.question-header');
    const arrowIcon = item.querySelector('.arrow-icon');
    const answerDiv = item.querySelector('.question-anwser-div');


    answerDiv.classList.toggle('grid-rows-[1fr]');
    answerDiv.classList.toggle('opacity-100');
    arrowIcon.classList.toggle('rotate-180');
    headerText.classList.toggle('text-primary-500');
}


function toggleComments() {
    const commentContainer = document.getElementById('commentContainer');
    const buttonText = document.getElementById('buttonText');
    const buttonIcon = document.getElementById('buttonIcon');
    const overlayDiv = document.getElementById('overlayDiv');

    if (commentContainer.classList.contains('lg:h-[34rem]' , 'py-4' , 'lg:overflow-y-hidden')) {
        commentContainer.classList.remove('lg:h-[34rem]' , 'py-4' , 'lg:overflow-y-hidden');
        overlayDiv.classList.remove('lg:block');
        commentContainer.classList.add('h-auto' , 'pb-[4rem]');

        buttonText.textContent = 'بستن';
        buttonIcon.innerHTML = '<svg class="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 8.2928C11.6834 7.90228 12.3166 7.90228 12.7071 8.2928L18.364 13.9497C18.7545 14.3402 18.7545 14.9733 18.364 15.3639C17.9734 15.7544 17.3403 15.7544 16.9497 15.3639L12 10.4141L7.05025 15.3639C6.65973 15.7544 6.02656 15.7544 5.63604 15.3639C5.24551 14.9733 5.24551 14.3402 5.63604 13.9497L11.2929 8.2928Z" fill="#2852E4"></path></svg>';
    } else {
        commentContainer.classList.add('lg:h-[34rem]' , 'py-4' , 'lg:overflow-y-hidden');
        commentContainer.classList.remove('h-auto' , 'pb-[4rem]');
        overlayDiv.classList.add('lg:block');

        buttonText.textContent = 'مشاهده همه';
        buttonIcon.innerHTML = '<svg class="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 15.7072C12.3166 16.0977 11.6834 16.0977 11.2929 15.7072L5.63604 10.0503C5.24551 9.65982 5.24551 9.02666 5.63604 8.63613C6.02656 8.24561 6.65973 8.24561 7.05025 8.63613L12 13.5859L16.9497 8.63613C17.3403 8.24561 17.9734 8.24561 18.364 8.63613C18.7545 9.02666 18.7545 9.65982 18.364 10.0503L12.7071 15.7072Z" fill="#2852E4"></path></svg>';
    }
}