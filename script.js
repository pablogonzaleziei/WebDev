const skills = document.querySelectorAll('.slider');

skills.forEach(skill => {
  const percentage = skill.innerText;
  skill.style.transform = `rotate(${(percentage / 100) * 360}deg)`;
});
