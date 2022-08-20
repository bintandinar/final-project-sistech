import axios from "axios";
import { useState } from "react";

const AddCategory = () => {
  const initialData = {
    category:""
  };

  const [inputData, setInputData] = useState(initialData);

  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
    console.log(inputData);
  };

  const handleSubmit = async () => {
    axios.post('https://avatar.ristek.cs.ui.ac.id/category/',
    inputData, {
      headers: {
        'Authorization': 'Bearer 62f9b9b5ca752021a9ceabda',
        'X-USER-TOKEN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjA4MzUxNjksImlzcyI6IjYyZjljMWZjY2E3NTIwMjFhOWNlYWJlMCJ9.szofCxorxXLMj2LDtYQ_g6zaUR3cBq90HyiQdgaSsf0'
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  return (  
    <div>
      <form >
        <input 
        onChange={handleInput} 
        type="text" 
        placeholder="Add Category"
        defaultValue={inputData?.category} />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
 
export default AddCategory;