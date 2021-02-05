const randomProperties = function (particle) {
    const left = Math.floor(Math.random() * (99 - 1)) + 1;
    particle.style.setProperty('--left', left + '%');
  
    const top = Math.floor(Math.random() * (99 - 1)) + 1;
    particle.style.setProperty('--top', top + '%');
  
    const size = Math.floor(Math.random() * (6 - 2)) + 2;
    particle.style.setProperty('--size', size + 'px');
    particle.style.setProperty('--blur', (size * 4) + 'px');
    particle.style.setProperty('--spread', (size) + 'px');
  };

  const addSparkles = function() {
    let maxCount = (Math.random() * 99) + 10;
  
    for (let i = 0; i < maxCount; i++) {
      let sparkle = document.createElement("div");
      sparkle.classList.add("particle");
  
      let nav = document.querySelector('nav');
      nav.appendChild(sparkle);
        
      randomProperties(sparkle);
    }
  };


  addSparkles();