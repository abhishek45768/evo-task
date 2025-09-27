import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NoteList = () => {
  const [list, setList] = useState([]);

  const geList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-note");
      if (response) {
        console.log(response, "response");
        setList(response.data?.data);
        console.log("Added success!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    geList();
  }, []);
const navigate=useNavigate()
  return (
    <>
    <div style={{display:"flex",gap:"5px"}}>
    <button onClick={()=>{navigate("/add-note")}}>Add Note</button>
    <button onClick={()=>{navigate("/view-weather")}}>View Weather</button>
    </div>
    <table className="note-table">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Title</th>
          <th>Content</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={item?._id}>
            <td>{index + 1}</td>
            <td>{item?.title}</td>
            <td>{item?.content}</td>
            <td>{new Date(item?.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
};

export default NoteList;
