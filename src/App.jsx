import React from 'react'
import Home from './components/Home';
import {Switch , Route} from 'react-router-dom';
import Productos from './components/Productos';
import DetalleInstrumentos from './components/detalleInstrumento'
import Mapa from './components/DondeEstamos'


const App = () => {
    return (

        <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/dondeEstamos" component={Mapa} ></Route>
        <Route path="/productos" component={Productos} ></Route>
        <Route path="/detalleInstrumento/:id" component={DetalleInstrumentos}></Route>
        </Switch>

        )
}

export default App