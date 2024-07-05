document.getElementById('newsletter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('https://your-app-name.herokuapp.com/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const data = await response.text();
        alert(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to subscribe. Please try again later.');
    }
});
