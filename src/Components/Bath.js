function Bath(props) {
    return(
        <div class="bathrooms" id={`${props.size}Bath`}>
          <h1>{props.size} Bath</h1>  
        </div>
    )
}

export default Bath;