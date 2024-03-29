
async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  try {
  const learnersAxios = await axios.get('http://localhost:3003/api/learners')
  const learners = learnersAxios.data;

  const mentorsAxios = await axios.get('http://localhost:3003/api/mentors')
  const mentors = mentorsAxios.data;

  const info = document.querySelector('.info');
  info.textContent = "No learner is selected";

  let result = [];
  
  learners.forEach(learner => {
    const response = {
      ...learner,
      mentors: learner.mentors.map(mID => {
        const mentor = mentors.find(mentor2 =>
          mentor2.id === mID);
          return mentor.firstName + " " + mentor.lastName
        })
      }
      result.push(response);
    });
    
    
    result.forEach(learner => {
    const divCont = document.querySelector(".cards")
    divCont.append();

    const div = document.createElement('div');
    div.classList.add('card');
    divCont.appendChild(div);
    
    const h3 = document.createElement('h3');
    h3.textContent = `${learner.fullName}`
    div.appendChild(h3);
    
    const divInner = document.createElement("div");
    divInner.textContent = `${learner.email}`;
    div.appendChild(divInner);
    
    const h4 = document.createElement("h4");
    h4.classList.add("closed");
    h4.textContent = 'Mentors'
    div.appendChild(h4);
    
    const unli = document.createElement('ul');
    div.appendChild(unli);
    
    learner.mentors.forEach(mentorName => {
      const mentorLiItem = document.createElement('li');
      mentorLiItem.textContent = mentorName;
      unli.appendChild(mentorLiItem);
    })
    
    
    let cards = document.querySelectorAll(".card");
    
    h4.addEventListener("click", (evt) => {
      evt.stopPropagation();
      h4.classList.toggle("closed");
      h4.classList.toggle("open");
      cards.forEach((otherCard) => {
        if (otherCard !== div) {
          otherCard.classList.remove('selected');
          const otherH3 = otherCard.querySelector('h3');
          otherH3.textContent = otherH3.textContent.split(',')[0];
        }
      })
      div.classList.add('selected');

      info.textContent = `The selected learner is ${learner.fullName}`
      h3.textContent = `${learner.fullName}, ID ${learner.id}`
    })


    div.addEventListener("click", () => {
      if (!div.classList.contains('selected')) {
      cards.forEach((otherCard) => {
        if (otherCard !== div) {
          otherCard.classList.remove('selected');
          const otherH3 = otherCard.querySelector('h3');
          otherH3.textContent = otherH3.textContent.split(',')[0];
        }
      });
    }
      
      div.classList.toggle('selected')

      if (div.classList.contains('selected')) {
        info.textContent = `The selected learner is ${learner.fullName}`
        h3.textContent = `${learner.fullName}, ID ${learner.id}`
      } else {
        info.textContent = "No learner is selected"
        h3.textContent = `${learner.fullName}`
      }

    })
  })
  
  
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
      footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`
    } catch (error) {
      console.error(error);
    }
    
    // 👆 WORK WORK ABOVE THIS LINE 👆
  }
  
  // ❗ DO NOT CHANGE THE CODE  BELOW
  if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
  else sprintChallenge5()
  