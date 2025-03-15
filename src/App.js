import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [results, Setresults] = useState(false)
	const [photos, Setphotos] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((res) => res.json())
			.then(
				(result) => {
					Setresults(true)
					Setphotos(result)
				},
				(error) => {
					Setresults(false)
					console.log(error)
				},
			)
	}, [])
	return (
		<div className='App'>
			{results &&
				photos.map((photo) => {
					return (
						<div className='photo-card' key={photo.id}>
							<h4>{photo.title}</h4>,
							<img
								src={photo.thumbnailUrl}
								alt=''
							></img>
							<p className='photo-title'>{photo.id}</p>
						</div>
					)
				})}
		</div>
	)
}

export default App
