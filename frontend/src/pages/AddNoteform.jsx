
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddNoteform = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: "",
            content: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("this Field is required"),
            content: Yup.string().required("this Field is required"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:5000/api/add-note", values);
                if (response) {
                    console.log("Added sucess!")
                    navigate("/")
                }
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Add Note:</h1>
                <label>Title: </label>
                <input placeholder='title' name="title" {...formik.getFieldProps("title")} />
                {formik.errors.title && <p style={{color:"red"}}>{formik.errors.title}</p>}
                <br/>
                <br/>
                <label>Content: </label>
                <input placeholder='content' name="content" {...formik.getFieldProps("content")} />
                {formik.errors.content && <p style={{color:"red"}}>{formik.errors.content}</p>}
                <br/>
                <br/>
                <button type="Submit">Add Note  </button>
            </form>
        </>)
}
export default AddNoteform;