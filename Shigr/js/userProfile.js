document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const editForm = document.getElementById('edit-form');
    const profileCard = document.querySelector('.profile-card');

    // Load profile data from local storage
    function loadProfile() {
        const name = localStorage.getItem('name') || 'Aniket tyagi';
        const email = localStorage.getItem('email') || 'anikets9560@gmail.com';
        const contact = localStorage.getItem('contact') || '+123 456 7890';

        document.getElementById('name').textContent = name;
        document.getElementById('email').textContent = email;
        document.getElementById('contact').textContent = contact;
    }

    // Prefill the form with the current profile data
    function prefillForm() {
        document.getElementById('edit-name').value = document.getElementById('name').textContent;
        document.getElementById('edit-email').value = document.getElementById('email').textContent;
        document.getElementById('edit-contact').value = document.getElementById('contact').textContent;
    }

    // Show the edit form
    editBtn.addEventListener('click', () => {
        prefillForm();
        editForm.style.display = 'flex';
        profileCard.style.display = 'none';
    });

    // Save / cancel the form data and update the profile card
    saveBtn.addEventListener('click', () => {
        const newName = document.getElementById('edit-name').value;
        const newEmail = document.getElementById('edit-email').value;
        const newContact = document.getElementById('edit-contact').value;

        document.getElementById('name').textContent = newName;
        document.getElementById('email').textContent = newEmail;
        document.getElementById('contact').textContent = newContact;

        localStorage.setItem('name', newName);
        localStorage.setItem('email', newEmail);
        localStorage.setItem('contact', newContact);

        editForm.style.display = 'none';
        profileCard.style.display = 'block';
    });
    cancelBtn.addEventListener('click', () => {
      
        editForm.style.display = 'none';
        profileCard.style.display = 'block';
    });

    // Load profile data on page load
    loadProfile();
});
