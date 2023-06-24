(function() {
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#email");
    let nameInput = document.querySelector("#name");
    let messageInput = document.querySelector("#message");

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.')
            return false;
          }
      
          if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
          }
      
          if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
          }
      
          showErrorMessage(emailInput, null);
          return true;
    }

    function validateName() {
        let value = nameInput.value;

        if (!value) {
            showErrorMessage(nameInput, 'Name is a required field.');
            return false;
        }

        if (value.length < 2) {
            showErrorMessage(nameInput, 'Name should be at least 2 characters long.');
            return false;
        }

        showErrorMessage(nameInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if(!value) {
            showErrorMessage(messageInput, "Message is a required field.");
            return false;
        }
        if (value.length < 5) {
            showErrorMessage(messageInput, 'Message should be at least 5 characters long.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function messageCount() {
        let value = messageInput.value;
        let current = document.getElementById('current');
        let counter = document.getElementById('count');

        current.textContent = value.length;

        if (value.length >= 200) {
            counter.classList.add("text-danger");
        }
        else if(value.length < 200) {
            counter.classList.remove("text-danger");
        }
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidName = validateName();
        let isValidMessage = validateMessage();

        return isValidEmail && isValidName && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validateForm()) {
            alert('Thanks for reaching out to me! I\'ll get back to you soon.');
        }
    })

    emailInput.addEventListener('input', validateEmail);
    nameInput.addEventListener('input', validateName);
    messageInput.addEventListener('input', validateMessage);
    messageInput.addEventListener('input', messageCount);
})();


