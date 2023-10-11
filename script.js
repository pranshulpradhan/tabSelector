document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the 'live' class from all buttons
            buttons.forEach(b => b.classList.remove('live'));

            // Add the 'live' class to the clicked button
            button.classList.add('live');

            // Hide all contents
            contents.forEach(content => content.style.display = 'none');

            // Show the content corresponding to the clicked button
            const contentId = button.getAttribute('data-id');
            document.getElementById(contentId).style.display = 'block';
        });
    });

    // Click the first button by default to show initial content
    buttons[0].click();
});
