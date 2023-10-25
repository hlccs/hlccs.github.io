$(document).ready(function() {
    $.ajax({
        url: 'navbar.html',
        type: 'GET',
        success: function(data) {
            $('#nav-place').html(data);
        },
        error: function() {
            console.error('Failed to load navbar.html');
        }
    });
});