let dynamic_text = document.querySelector('.dynamic-text');
let skills = ["Full Stack Developer", "Android Developer", "UI/UX Designer", "Web Designer", "Graphic Designer"];
let skillIndex = 0;
let charIndex = 0;

function typeSkill() {
  if (charIndex < skills[skillIndex].length) {
    dynamic_text.textContent += skills[skillIndex][charIndex];
    charIndex++;
    setTimeout(typeSkill, 100); 
  } else {
    setTimeout(clearSkill, 2000); 
  }
}

function clearSkill() {
  if (charIndex > 0) {
    dynamic_text.textContent = dynamic_text.textContent.slice(0, -1);
    charIndex--;
    setTimeout(clearSkill, 100); 
  } else {
    skillIndex = (skillIndex + 1) % skills.length; 
    typeSkill(); 
  }
}


typeSkill();
