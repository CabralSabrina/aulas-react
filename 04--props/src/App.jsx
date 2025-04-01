import './App.css'
import Footer from './components/Footer'
import Titulo from "./components/Titulo"
const App = () => {
    return (
        <div>
            <Titulo nome = "Maria" paragrafo={true} cor={"red"}  bg={"blue"} />
            <Titulo nome = "Jesus" paragrafo={true} cor={"blue"} bg={"yellow"} />
            <Titulo nome = "Jese" paragrafo={true} cor={"purple"} bg={"orange"}/>
            

        </div>
    )
}
export default App

