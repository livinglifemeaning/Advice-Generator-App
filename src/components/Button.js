import dice from '../images/icon-dice.svg';  

const Button = ({onClick}) => {
 return (
    <div className= "btn" onClick={onClick}>
        <img src={dice} alt="Button" />
      </div>
 ); 
}; 

export default Button; 