import Navbar from "./Navbar";
// import { useQuery } from 'react-query';
import ThreadList from "./ThreadList";
// import getCategory from '../Services/fetchCategory';


const detailCategory = () => {
  // const {
  //   data: categoryListData, 
  //   isLoading : isLoadingCategoryList
  // } = useQuery(
  //   'categoryList', 
  //   async () => await getCategory(), 
  //   {
  //     initialData: []
  //   }
  // );

  return (  
    <>
      <Navbar />
      <div className="detail-category">
        <div className="thread-list">
          <ThreadList />
        </div>
      </div>
    </>
  );
}
 
export default detailCategory;