document.getElementById('name-input').addEventListener('input',
    function () {
    const inputValue = this.value.trim();
    const outputSpan = document.getElementById('name-output');

    if (inputValue === '') {
      outputSpan.textContent = 'Anonymous';
    } else {
      outputSpan.textContent = inputValue;
    }
  });