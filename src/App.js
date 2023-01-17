import './scss/app.scss';
import {Header} from "./components";
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./pages/Cart";
import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/pizzas-reducer";


const pizzasAPI = {
    getPizzas() {
        return axios.get('http://localhost:3001/pizzas')
    }
}

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        pizzasAPI.getPizzas().then(response => {
            dispatch(setPizzas(response.data))
        })
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>

                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'cart'} element={<Cart/>}/>
                    </Routes>

                </div>
            </div>

        </div>
    );
}

// class App extends Component {
//     componentDidMount() {
//         pizzasAPI.getPizzas().then(response => {
//             const data = response.data.pizzas
//             this.props.setPizzas(data)
//         })
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <div className="wrapper">
//                     <Header/>
//                     <div className="content">
//                         <Routes>
//
//                             <Route path={'/'} element={<Home items={this.props.items}/>}/>
//                             <Route path={'cart'} element={<Cart/>}/>
//                         </Routes>
//
//                     </div>
//                 </div>
//
//             </div>
//         );
//     }
// }
// const mapStateToProps=(state)=>{
//     return{
//         items:state.pizzas.items,
//         filters:state.filters
//     }
//
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         setPizzas:(items)=>dispatch(setPizzas(items))
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
