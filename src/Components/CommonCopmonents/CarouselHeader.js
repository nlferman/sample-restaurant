import '../../Bootstrap/css/bootstrap.css';
import {pancakes} from '../../Images/Images';

const CarouselHeader = () => {
    return (
        <div id="carouselExampleIndicators bg-danger" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={pancakes} className="d-block w-100" alt="Breakfast" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Breakfast</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={pancakes} className="d-block w-100" alt="Lunch" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Lunch</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={pancakes} className="d-block w-100" alt="Dinner" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Dinner</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
      </div>
    );
  }

  export default CarouselHeader