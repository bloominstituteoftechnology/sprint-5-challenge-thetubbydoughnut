// const { default: axios } = require("axios")

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  
  const learnersAxios = axios.get('http://localhost:3003/api/learners')
  console.log(learnersAxios);
  const learners = learnersAxios.data;
  console.log(learners);

  const mentorsAxios = axios.get('http://localhost:3003/api/mentors')
  const mentors = mentorsAxios.data;

  const info = document.querySelector('.info');
  info.textContent = "No learner is selected";

  let result = [];

  learners.forEach(learner => {
    const response = {
      ...learner,
      mentors: learner.mentors.map(mID => {
        const mentor = mentors.find(mentor2 => {
          mentor2.id == mID;
        })
        return mentor.firstName + " " + mentor.lastName
      })
    }
    result.push(response);
  })
  result.forEach(learner => {
    
  })
  

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear - 1}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
