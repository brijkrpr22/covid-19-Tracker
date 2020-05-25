import React from "react"

class Global extends React.Component {



    render() {

        const { globaldtl, currentDate } = this.props


        return (
            <div className="row"> 
            
                <div className="NewConfirmed">
                    <h1>New Confirmed</h1>
                    <h3>  {globaldtl.NewConfirmed} </h3>
                    <h4>  {new Date(currentDate).toDateString()} </h4>
                </div>


                <div className="TotalConfirmed">
                    <h1>Total Confirmed</h1>
                    <h3>  {globaldtl.NewConfirmed} </h3>
                    <h4>  {new Date(currentDate).toDateString()} </h4>
                </div>


                <div className="NewDeaths">
                    <h1>New Deaths</h1>
                    <h3>  {globaldtl.NewDeaths} </h3>
                    <h4>  {new Date(currentDate).toDateString()} </h4>
                </div>

                <div className="TotalDeaths">
                    <h1>Total Deaths</h1>
                    <h3>  {globaldtl.TotalDeaths} </h3>
                    <h4>  {new Date(currentDate).toDateString()} </h4>
                </div>


                <div className="TotalRecovered">
                    <h1>Total Recovered</h1>
                    <h3>  {globaldtl.TotalRecovered} </h3>
                    <h4>  {new Date(currentDate).toDateString()} </h4>
                </div>
            </div>
        )
    }
}

export default Global  