import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function MovieInsert() {
    const { register, handleSubmit, reset } = useForm()
    const [movieList, setMovieList] = useState([])
    const [disableBtn, setDisableBtn] = useState(false)
    const navigate = useNavigate()

    const onAdd = (result) => {
        const { title, synopsis, genre, age } = result
        const movie = { title, synopsis, genre, age }
        const movies = [...movieList, movie]
        setMovieList(movies)

        reset()
    }
    
    useEffect(() => {
        if (movieList.length == 5) {
            setDisableBtn(true)
        }
    }, [movieList])

    const onSubmit = () => {
        movieList.forEach((movie) => {
            axios.post('http://localhost:3000/movies', movie)
                .then(_ => navigate("/movie/list"))
        })
    }

    return (
        <>
            <div className="p-4">
                <h3>Input Film</h3>

                {movieList.map((result, index) => {
                    return (
                        <div key={index} className="card shadow mt-3">
                            <div className="card-body">
                                <div>
                                    <label className="form-label">Judul Film</label>
                                    <input
                                        className="form-control" value={result.title} type="text" name="title" id="title" disabled
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Synopsis</label>
                                    <input
                                        className="form-control" value={result.synopsis} type="text" name="synopsis" id="synopsis" disabled
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Genre</label>
                                    <input
                                        className="form-control" value={result.genre} type="text" name="genre" id="genre" disabled
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Umur</label>
                                    <input
                                        className="form-control" value={result.age} type="number" name="age" id="age" disabled
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}

                <form onSubmit={handleSubmit(onAdd)}>
                    <div className="card shadow">
                        <div className="card-body">
                            <div>
                                <label className="form-label">Judul Film</label>
                                <input
                                    className="form-control" type="text" name="title" id="title"
                                    {...register("title")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Synopsis</label>
                                <input
                                    className="form-control" type="text" name="synopsis" id="synopsis"
                                    {...register("synopsis")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Genre</label>
                                <input
                                    className="form-control" type="text" name="genre" id="genre"
                                    {...register("genre")}
                                />
                            </div>
                            <div>
                                <label className="form-label">Umur</label>
                                <input
                                    className="form-control" type="number" name="age" id="age"
                                    {...register("age")}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" id="add" className="btn btn-primary d-block mt-4" disabled={disableBtn}>Add</button>
                    <button type="button" id="save" className="btn btn-primary mt-4 w-100" onClick={onSubmit}>Save</button>
                </form>

            </div >
        </>
    )
}

export default MovieInsert