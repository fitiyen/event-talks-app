document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('scheduleContainer');
  const searchInput = document.getElementById('searchInput');
  let talks = [];

  // Fetch talks from the API
  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
    });

  // Render the schedule
  function renderSchedule(talksToRender) {
    scheduleContainer.innerHTML = '';
    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

    talksToRender.forEach((talk, index) => {
      if (index === 3) {
        // Add lunch break after the 3rd talk
        const lunchBreakDiv = document.createElement('div');
        lunchBreakDiv.className = 'schedule-item lunch-break';
        const lunchStartTime = new Date(currentTime.getTime());
        currentTime.setMinutes(currentTime.getMinutes() + 60);
        const lunchEndTime = new Date(currentTime.getTime());
        lunchBreakDiv.innerHTML = `<p class="time">${formatTime(lunchStartTime)} - ${formatTime(lunchEndTime)}</p><h2>Lunch Break</h2>`;
        scheduleContainer.appendChild(lunchBreakDiv);
      }

      const talkDiv = document.createElement('div');
      talkDiv.className = 'schedule-item';

      const startTime = new Date(currentTime.getTime());
      currentTime.setMinutes(currentTime.getMinutes() + talk.duration);
      const endTime = new Date(currentTime.getTime());

      talkDiv.innerHTML = `
        <p class="time">${formatTime(startTime)} - ${formatTime(endTime)}</p>
        <h2>${talk.title}</h2>
        <p><strong>Speakers:</strong> ${talk.speakers.join(', ')}</p>
        <p>${talk.description}</p>
        <p class="category"><strong>Categories:</strong> ${talk.category.join(', ')}</p>
      `;
      scheduleContainer.appendChild(talkDiv);

      // Add transition time
      if (index < talksToRender.length - 1 && index !== 2) {
          currentTime.setMinutes(currentTime.getMinutes() + 10);
      }
    });
  }

  // Format time to HH:MM AM/PM
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talks.filter(talk => {
      return talk.category.some(category => category.toLowerCase().includes(searchTerm));
    });
    renderSchedule(filteredTalks);
  });
});
