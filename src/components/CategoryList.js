import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchCategory from '../Services/fetchCategory';
import AddCategory from './AddCategory'
// import addCategory from '../Services/getCategory';


const CategoryList = () => {
    //useQuery get category
    const {
      data: categoryListData, 
      isLoading : isLoadingCategoryList
    } = useQuery(
      'categoryList', 
      async () => await fetchCategory(), 
      {
        initialData: []
      }
    );

    
    //loading state here
    if (isLoadingCategoryList) {
      return <div>Loading...</div>
    }

    return (  
      <ul className='list-category'>
        <li>
          <div className='input-category'>
            <AddCategory />
          </div>
        </li>
          {
           categoryListData?.map((category, id) => (
              <li key={id}>
                <a href="/DetailCategory">{ category?.name }</a>
              </li>
           ))
          }
      </ul>   
    );
}
 
export default CategoryList;