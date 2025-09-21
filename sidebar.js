document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobilemenubtn');
    const mobileSidebar = document.querySelector('.mobilesidebar');
    const sidebarOverlay = document.querySelector('.sidebaroverlay');
    const closeBtn = document.querySelector('.closebtn');
    
    if (mobileMenuBtn && mobileSidebar && sidebarOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });
        
        function closeSidebar() {
            mobileSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
        
        closeBtn?.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);
        
        const dropdownToggles = document.querySelectorAll('.sidebardropdowntoggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const menu = this.nextElementSibling;                
                menu.classList.toggle('active');
            });
        });
    }
});