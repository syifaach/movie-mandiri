import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Search(props) {
    const onResult = (event) => {
        if (props.data) {
            const dataFilter = props.data.filter(data => {
                return data.age <= event.target.value
            })

            props.dataChange(dataFilter)
        }
    }

    return (
        <form className="d-flex col-md-3">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={onResult} />
        </form>
    )
}

function MovieList() {
    const [data, setData] = useState([])
    const [dataFilter, setDataFilter] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        initData()
    }, [])

    const initData = () => {
        axios.get('http://localhost:3000/movies')
            .then(result => {
                setData(result.data)
                setDataFilter(result.data)
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/movies/${id}`)
            .then(_ => initData())
    }

    const dataChange = (result) => {
        setData(result)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex mb-2 mt-4">
                        <h5>List Film</h5>
                        <Link type="button" className="btn btn-success ms-auto" to="/movie/insert"><i className="fa-solid fa-plus me-3"></i>Tambah Film</Link>
                    </div>
                </div>

                <div className="row">
                    <Search data={dataFilter} dataChange={dataChange}/>
                </div>

                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Judul</th>
                            <th scope="col">Sinopsis</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Umur</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(result => {
                            return (
                                <tr key={result.id}>
                                    <th scope="row">{result.id}</th>
                                    <td>{result.title}</td>
                                    <td>{result.synopsis}</td>
                                    <td>{result.genre}</td>
                                    <td>{result.age}</td>
                                    <td className="d-flex flex-row gap-2">
                                        <button type="button" className="btn btn-warning" onClick={_ => navigate(`/movie/update/${result.id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => onDelete(result.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MovieList