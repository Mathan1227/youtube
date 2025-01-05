// Fetch JSON data and populate video cards
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const videoGrid = document.querySelector('.main-section'); // Target the main content container

        data.forEach(video => {
            // Create video card container
            const videoCard = document.createElement('div');
            videoCard.classList.add('video-card');
            videoCard.innerHTML = `
                <img src="${video['yt-core-image src']}" alt="Video Thumbnail">
                <section>
                    <h1>${video['style-scope (2)']}</h1>
                    <p>
                        ${video['yt-simple-endpoint']} <br>
                        ${video['inline-metadata-item']} • ${video['inline-metadata-item (2)']}
                    </p>
                </section>
            `;

            // Add click functionality to play video
            videoCard.addEventListener('click', () => {
                window.open(video['yt-simple-endpoint href'], '_blank');
            });

            // Append video card to the grid
            videoGrid.appendChild(videoCard);
        });
    })
    .catch(error => console.error('Error fetching or parsing data:', error));
