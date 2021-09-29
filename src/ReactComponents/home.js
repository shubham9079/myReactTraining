import React from 'react'
import '../Reactcss/home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="jumbotron text-center"id="home">
            <div className="content">
                <h1>Company</h1> 
                <p>We specialize in Web Development</p> 
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" id="formbox">
                        <form>
                            <div className="input-group">
                            <input type="email" className="form-control" size="50" placeholder="Email Address" required />
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-danger">Subscribe</button>
                            </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            </div>
        );
    }
}
export default Home;