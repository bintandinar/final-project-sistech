import axios from 'axios';


const fetchCategory = async () => {
  const { data: category }  = await axios.get('https://avatar.ristek.cs.ui.ac.id/category/', {
    headers : {
      'Content-Type':'application/json',
      'Authorization': 'Bearer 62f9b9b5ca752021a9ceabda',
      'X-USER-TOKEN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjA4MzUxNjksImlzcyI6IjYyZjljMWZjY2E3NTIwMjFhOWNlYWJlMCJ9.szofCxorxXLMj2LDtYQ_g6zaUR3cBq90HyiQdgaSsf0'
    }
  })
  return category
}

    
export default fetchCategory;


