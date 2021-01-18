export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
export const mockurl = 'https://jsonplaceholder.typicode.com/posts/';

const catchErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};


export const getScores = (url) => fetch(url)
  .then(response => response.json())
  .then(data => data);

export const postScores = (user, score, url) => fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    user,
    score,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
