import axios from 'axios';

useEffect(() => {
  axios.get('https://api.github.com/users/octocat/repos')  
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
}, []);
