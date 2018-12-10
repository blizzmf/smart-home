import fetch from 'isomorphic-fetch';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data,
});

export const CHANGE_TAB = 'CHANGE_TAB';

export const changeTab = () => ({
  type: CHANGE_TAB,
});

export const saveData = (tableContent, tab) => dispatch => fetch(`/api/${tab}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: tableContent, tab }),
  })

  export const getData = (tab) => dispatch => fetch(`/api/${tab}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw response.text();
  })
  .then(data => dispatch(receiveData(data)))
  .catch(err => Promise.resolve(err).then((error) => {
    const message = error instanceof Error ? error.message : error;
    console.log(message);
  }));