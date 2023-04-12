import React from "react";

class Form extends React.Component{
    render() {
        return (
            <div className="form"> 
                <form onSubmit={this.props.getWeatherForecast}>
                    <input type="text" name="city" placeholder="Enter City" />
                    <input type="text" name="country" placeholder="Enter Country" />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Form;