import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

function MovieUpdate() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(result => {
                setData(result.data)
            })
    }, [])

    const onSubmit = (result) => {
        const {title, synopsis, genre, age} = result
        const data = {title, synopsis, genre, age}

        axios.put(`http://localhost:3000/movies/${id}`, data)
            .then(_ => navigate("/movie/list"))
    }

    return (
        <>
            <div className="p-4">
                <h3>Update Film</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card shadow">
                        <div className="card-body">
                            <div>
                                <label className="form-label">Judul Film</label>
                                <input
                                    className="form-control" defaultValue={data.title} type="text" name="title" id="title"
                                    {...register("title")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Synopsis</label>
                                <input
                                    className="form-control" defaultValue={data.synopsis} type="text" name="synopsis" id="synopsis"
                                    {...register("synopsis")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Genre</label>
                                <input
                                    className="form-control" defaultValue={data.genre} type="text" name="genre" id="genre"
                                    {...register("genre")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Umur</label>
                                <input
                                    className="form-control" defaultValue={data.age} type="text" name="age" id="age"
                                    {...register("age")}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" id="save" className="btn btn-primary mt-4 w-100">Save</button>
                </form>

            </div >
        </>
    )
}

export default MovieUpdate