import '../../Bootstrap/css/bootstrap.css';

const cardDefault = 
{
    headerName: 'Breakfest'
};




function Card(props) {
    return (
      <div className="card"  style={{width: 18 + "rem"}}>
          <img className='card-img-top' src="" alt="Card Image Cap"/>
          <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Some quick test text.</p>
              <a href="#" className="btn btn-primary">Lunch Menu</a>
          </div>
      </div>
    );
  }

  export default Card;

  