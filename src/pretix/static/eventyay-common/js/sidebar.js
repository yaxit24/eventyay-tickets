$(document).ready(function() {
    // Only apply burger menu functionality on desktop (768px and above)
    // This preserves the perfect mobile view as requested
    function initBurgerMenu() {
        // Check if we're on desktop
        if ($(window).width() >= 768) {
            // Add burger menu toggle button if it doesn't exist
            if (!$('#sidebar-toggle').length) {
                var toggleButton = $('<button type="button" class="navbar-toggle" id="sidebar-toggle" data-toggle="collapse" data-target=".sidebar">' +
                    '<span class="sr-only">Toggle sidebar</span>' +
                    '<i class="fa fa-bars"></i>' +
                    '</button>');
                
                $('.navbar-header').prepend(toggleButton);
            }
            
            // Toggle sidebar functionality
            $('#sidebar-toggle').off('click').on('click', function(e) {
                e.preventDefault();
                $('.sidebar').toggleClass('sidebar-collapsed');
                $('#page-wrapper').toggleClass('sidebar-collapsed');
                
                // Store state in localStorage
                var isCollapsed = $('.sidebar').hasClass('sidebar-collapsed');
                localStorage.setItem('sidebarCollapsed', isCollapsed);
            });
            
            // Restore sidebar state from localStorage
            var savedState = localStorage.getItem('sidebarCollapsed');
            if (savedState === 'true') {
                $('.sidebar').addClass('sidebar-collapsed');
                $('#page-wrapper').addClass('sidebar-collapsed');
            }
        } else {
            // On mobile, remove any burger menu elements and ensure normal mobile behavior
            $('#sidebar-toggle').remove();
            $('.sidebar').removeClass('sidebar-collapsed');
            $('#page-wrapper').removeClass('sidebar-collapsed');
        }
    }
    
    // Initialize on page load
    initBurgerMenu();
    
    // Re-initialize on window resize to handle desktop/mobile transitions
    $(window).on('resize', function() {
        initBurgerMenu();
    });
});