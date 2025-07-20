document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    alert('Please select a valid date of birth.');
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    document.getElementById('result').innerText = 'Date of birth cannot be in the future.';
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').innerText = `Your Age: ${years} year, ${months} month, and ${days} day.`;
});
