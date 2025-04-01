import React from "react";
import'./Button.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
return(
    <div >
        <button className="custom-button" onClick={onClick}>{label}</button>
    </div>
)

}
export default Button;
