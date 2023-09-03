import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktailSlice'
import { Link } from 'react-router-dom'

function CocktailList() {
  const {cocktails,loading} = useSelector((state) =>({...state.app}))
  const [modifieldCocktail,setModifield] = useState([])
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchCocktails())
  },[]);

  useEffect(() =>{
    if(cocktails){
      const newCocktails = cocktails.map((item)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} =item;
          return{
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass
          }
      })
      setModifield(newCocktails)
    }else{
      setModifield([])
    }
  },[cocktails])

  if(loading){
    return(
      <div className="spinner-grow" role='status'>
        <span className="visually-hidden">
          Loading...
        </span>

      </div>
    )
  }
  // s
  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        modifieldCocktail.map((item) =>{
          const {id,name,image,glass,info} = item;

          return(
            <div className="col" key={id}>
              <img src={image} alt="image" className='card-img-top'/>
              <div className="card-boyd" style={{textAlign:"left"}}>
              <h5 className='card-title'>{name}</h5>
              <h4 className='card-title'>{glass}</h4>
              <p className='card-text'>{info}</p>
              <Link to={`/cocktail/${id}`}>
                <button className='btn btn-info'>Details</button>
              </Link>

              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default CocktailList