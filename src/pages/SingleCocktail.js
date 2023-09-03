import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import {fetchSingleCocktail} from '../redux/features/cocktailSlice'
function SingleCocktail() {

  const {cocktail,loading} =useSelector((state) =>({...state.app}))
  const [modifieldCocktail,setModifiedCocktail] = useState([])

  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchSingleCocktail({id}))
  },[id])
  useEffect(()=>{
   
    if(cocktail.length > 0){
    const {
      strDrink:name,
      strDrinkThumb:image,
      strAlcoholic:info,
      strCategory:category,
      strGlass:glass,
      strInstructions:instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = cocktail[0];
    const ingredients = [ strIngredient1,strIngredient2,  strIngredient3,strIngredient4,strIngredient5,]
    const newCocktail ={
      name,image,info,category,glass,instructions,ingredients
    };
    setModifiedCocktail(newCocktail)
    }else{
      setModifiedCocktail(null)
    }
  },[id,cocktail])
  
  if(!modifieldCocktail){
    return <h2 className='section-title'>No Cocktail to Display</h2>
  }else{
    const {name,image,category,info,glass,instructions,ingredients}= modifieldCocktail
    return(
      <>
        {
          loading ?(
              <div className="spinner-groe" role='status'>
            <span className="visually-hidden">Loading...</span>
              </div>
          ):(
            <section className='section cocktail-section'>
            <Link to="/">
              <button className='btn btn-danger'>Go Back</button>
            </Link>
            <div className="drink">
              <img src={image} alt="image" />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name:</span>{name}
                </p>
                <p>
                  <span className="drink-data">Categpry:</span>{category}
                </p>
                <p>
                  <span className="drink-data">Info:</span>{info}
                </p>
                <p>
                  <span className="drink-data">Glass:</span>{glass}
                </p>
                <p>
                  <span className="drink-data">Instructions:</span>{instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredient:</span>{
                  
                    ingredients&& ingredients.map((item,index) =>{
                    return item ? <span key={index}>{item}</span>:null
                  })
                  }
                </p>

              </div>
            </div>
             </section>
          )
        }
      </>
    )
  }
 
  return (
    <div>
    
    </div>
  )
}

export default SingleCocktail