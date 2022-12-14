import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import './RowPost.css'
import '../../urls'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then((response) =>{
            setMovies(response.data.results)
      }).catch(err => {
        console.log(err)
      })
    }, [])

    const opts = {
      height: '390',
      width: '98%',
      playerVars: {
        autoplay: 1,
      }}
 
      const movieClick = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length != 0) {
              seturlId(response.data.results[0])
            }
        })
      }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
            <img onClick={()=>movieClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.poster_path}`} alt="Poster" />
            )}

        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost