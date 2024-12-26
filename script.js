document.addEventListener('DOMContentLoaded', () => {
  const dayIn = document.getElementById('date');
  const mnthIn = document.getElementById('mnth');
  const yrIn = document.getElementById('yr');
  const errorD = document.querySelector('.error.D');
  const errorM = document.querySelector('.error.M');
  const errorY = document.querySelector('.error.Y');

  // Add event listeners to remove error styling on input
  dayIn.addEventListener('input', () => {
    if (dayIn.value >= 1 && dayIn.value <= 31) {
      dayIn.style.border = "solid 1.5px hsl(0, 1%, 44%)";
      errorD.style.display = 'none';
    }
  });

  mnthIn.addEventListener('input', () => {
    if (mnthIn.value >= 1 && mnthIn.value <= 12) {
      mnthIn.style.border = " solid 1.5px hsl(0, 1%, 44%)";
      errorM.style.display = 'none';
    }
  });

  yrIn.addEventListener('input', () => {
    if (yrIn.value <= new Date().getFullYear()) {
      yrIn.style.border = "solid 1.5px hsl(0, 1%, 44%)";
      errorY.style.display = 'none';
    }
  });
});

function calculateAge() {
  const day = parseInt(document.getElementById('date').value);
  const month = parseInt(document.getElementById('mnth').value);
  const year = parseInt(document.getElementById('yr').value);
  const dayIn = document.getElementById('date');
  const mnthIn = document.getElementById('mnth');
  const yrIn = document.getElementById('yr');
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const errorD = document.querySelector('.error.D');
  const errorM = document.querySelector('.error.M');
  const errorY = document.querySelector('.error.Y');

  let isValid = true;

  // Validate day
  if (isNaN(day) || day < 1 || day > 31) {
    dayIn.style.border = "solid #c71a1a";
    errorD.style.color =  "#c71a1a";
    errorD.style.display = 'block';
    isValid = false;
  }

  // Validate month
  if (isNaN(month) || month < 1 || month > 12) {
    mnthIn.style.border = "solid #c71a1a";
    errorM.style.display = 'block';
    errorM.style.color =  "#c71a1a";
    isValid = false;
  }

  // Validate year
  if (isNaN(year) || year < 0 || year > today.getFullYear()) {
    yrIn.style.border = "solid #c71a1a";
    errorY.style.display = 'block';
    errorY.style.color =  "#c71a1a";
    isValid = false;
  }

  // If any validation fails, return early
  if (!isValid) {
    return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.querySelector('.text.year span').textContent = ageYears+ ' '  ;
  document.querySelector('.text.months span').textContent = ageMonths +"  " ;
  document.querySelector('.text.days span').textContent = ageDays+"  "  ;
}
