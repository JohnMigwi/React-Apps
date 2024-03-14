import Post from "./Components/HTTP/post";
import Pagination from "./Components/HTTP/pagination";
import Parent from "./Optimazation/Parent";

function App (){
  return (
    <>
     <Pagination/>
     <Parent/>
     <Post/>
    </>
  )
}

export default App;