import React from "react"
import axios from "axios"
import Global from "./GlobalFile"
import Countries from "./Countries"



class Covid extends React.Component {

    state = {
        countries: [],
        global: [],
        currentDate: null, 
        loading: true
    }


    componentDidMount() {
        // This is placed inside 
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                console.log(res)
                //   const data = res.data.results;
                //   console.log(data);
                this.setState({
                    countries: res.data.Countries
                });
                this.setState({
                    global: res.data.Global
                })
                this.setState({
                    currentDate: res.data.Date
                })
                this.setState({
                    loading: false
                })
            })
            .catch(error => console.log(error))
    }








    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        return (

            // <>
            <div>
    
                <Global globaldtl={this.state.global} currentDate={this.state.currentDate} />
           

            <table>

                <thead>

                    <tr>

                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>Total Confirmed</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>

                    </tr>
                </thead>

                <tbody>
                    {this.state.countries.map(country => (
                        <Countries  countries={country} key={country.Country} />
                    ) )}
                </tbody>
                 
            </table>
            </div>
            // </>
        )
    }
}

































// class Covid extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             search: "",
//             data: []
//         }
//     }

//     handleClick = () => {

//         axios
//             .get("https://api.covid19api.com/summary", {
//                 params: {
//                     q: this.state.search
//                 }
//             })
//             .then(res =>
//                 console.log(res))
//         // this.setState({
//         //     data: res.data.items
//         // })
//         // )
//     };





//     render() {


//         return (

//             <>
//                 <div>Axios</div>
//                 < input
//                     value={this.state.search}
//                     onChange={e =>
//                         this.setState({
//                             search: e.target.value
//                         })
//                     }
//                 />
//                 <button onClick={this.handleClick}>SEARCH</button>

//                 <div>
//                     {
//                         this.state.data && this.state.data.map(item => (
//                             <div>
//                                 {item.login}
//                                 <img src={item.avatar_url} alt={
//                                     item.login} />
//                             </div>)
//                         )
//                     }
//                 </div>

//             </>
//         )
//     }
// }

export default Covid


