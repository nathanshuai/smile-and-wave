function Movies(props) {
     
  return (
    <div className=" container grid lg-5">
          {props.imgs.map(img => (
            <figure key={img.id}>
                <img alt={img.id} src={img.url}/>
            </figure>
          ))}
    </div>
  )
}

export default Movies;

/*
  
*/