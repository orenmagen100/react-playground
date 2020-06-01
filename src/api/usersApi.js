import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/users/';

export function getUsers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl + (user.id || ''), {
    method: 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
