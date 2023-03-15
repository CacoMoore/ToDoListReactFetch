
const Card = (props) => {
 
  return (
    <div class="card" style={{width: "18rem"}}>
      <img src={props.link} class="card-img-top" style={{width: "18rem", height: "15rem"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.text}</h5>
          <p class="card-text">{props.desc}</p>
          <a href="#" class="btn btn" style={{background: "#e08763"}}>{props.btn}</a>
        </div>
    </div>
  );
};

export default Card;