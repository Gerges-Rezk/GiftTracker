let giftId = 0;

function addGift() {
  const name = document.getElementById('gift-name').value;
  const recipient = document.getElementById('recipient').value;
  const description = document.getElementById('description').value;

  if (name && recipient && description) {
    giftId++;
    const giftList = document.getElementById('gift-list');
    const giftItem = document.createElement('div');
    giftItem.className = 'gift-item';
    giftItem.dataset.id = giftId;
    giftItem.innerHTML = `
      <h2><span class="reminder-icon">🔔</span>${name}</h2>
      <p><span>Recipient:</span> ${recipient}</p>
      <p><span>Description:</span> ${description}</p>
      <div class="reminder-form">
        <input type="date" class="reminder-date">
        <button onclick="setReminder(${giftId})">Set Reminder</button>
      </div>
    `;
    giftList.appendChild(giftItem);
    document.getElementById('gift-name').value = '';
    document.getElementById('recipient').value = '';
    document.getElementById('description').value = '';
  } else {
    alert('Please fill in all fields.');
  }
}

function setReminder(id) {
  const giftItem = document.querySelector(`.gift-item[data-id="${id}"]`);
  const dateInput = giftItem.querySelector('.reminder-date').value;
  const reminderIcon = giftItem.querySelector('.reminder-icon');

  if (dateInput) {
    const today = new Date();
    const reminderDate = new Date(dateInput);
    if (reminderDate >= today) {
      reminderIcon.style.display = 'inline';
      alert(`Reminder set for ${giftItem.querySelector('h2').textContent} on ${dateInput}`);
    } else {
      alert('Please select a future date.');
    }
  locais} else {
    alert('Please select a date.');
  }
}