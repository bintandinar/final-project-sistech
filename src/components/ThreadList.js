import { useQuery } from "react-query";
import fetchThread from "../Services/fetchThread";

const ThreadList = () => {
  const {
    data: threadListData, 
    isLoading : isLoadingThreadList
  } = useQuery(
    'threadList', 
    async () => await fetchThread(), 
    {
      initialData: []
    }
  );

  if (isLoadingThreadList) {
    return <div>Loading...</div>
  }


  return (  
    <div className="thread-list">
      <h1>THREAD LIST</h1>
      <br />
        <div className="thread-post">
          <h2>TITLE HERE</h2>
          {
            threadListData?.map((thread) => (
              <p>
                {thread?.name}
              </p>
            ))
          }
          <a href="/DetailThread">See more</a>
        </div>
    </div>
  );
}
 
export default ThreadList;