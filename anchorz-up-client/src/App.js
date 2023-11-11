import React, { useEffect, useState } from "react";
import AddShortenerUrl from "./components/AddShortenerUrl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteUrl, getListOfShortenerUrl } from "./api/url-api";

function App() {
  const [data, setDate] = useState([]);

  const fetchShortenerUrlList = async() => {
      try {
           const res = await getListOfShortenerUrl();
           setDate(res.data);
      } catch (error) {
          console.log(error, 'error from backend');
      }
  }
  useEffect(() => {
     fetchShortenerUrlList(); 
  },[]);

  const deleteUrlRow = async(id) => {
    try{
      const res = await deleteUrl(id);
      if(res.status === 200)
      {
        fetchShortenerUrlList();
        alert("URL has been deleted successfully");
      }
    }catch(error) {
      console.log("Url was not deleted, please contact IT Support")
    }
  }
return (
  <>
  <div className="container">
    <div className="sidebar">
    <img src="./data/logo.webp" className="logo" alt="logo" />
      <div className="short-url">
          <h2>My shortened URL's</h2>
          <table>
            <tbody>
            {data != null && data.length > 0 && data.map((url) => (
              <tr key={url.id}>
                  <td><a href={url.shortAlias} target="_blank">{url.shortAlias}</a></td>
                  <td>
                  <button type='submit' onClick={() => deleteUrlRow(url.id)}>
                      <RiDeleteBin6Line/>
                  </button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
     <AddShortenerUrl
      fetchTableData={() =>{fetchShortenerUrlList()}}
     />
  </div>
  </>
);
}

export default App;
