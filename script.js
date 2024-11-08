document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add logic to send the form data to a server or API

    // Display a thank you message
    document.getElementById('form-message').innerText = Thank you for your message, ${name}! We'll get back to you soon.;

    // Clear the form
    this.reset();
});





document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });


    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear the input field
});



