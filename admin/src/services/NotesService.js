/*
 * Notes service for interacting with the API backend
 */

const NotesService = ({ fetch }) => {
  const create = async note => {
    const res = await fetch('/notes', {
      method: 'POST',
      body: JSON.stringify(note)
    });
    return Promise.resolve(res);
  };

  return {
    create
  };
};

export default NotesService;
