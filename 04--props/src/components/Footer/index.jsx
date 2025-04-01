
import './footer.css'


//Componente Footer com arrow functions:
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 💕 {new Date().getFullYear()} Meu site. Todos os direitos reservados!  </p>
        </footer>
    )
} 
export default Footer

