import "./LogoShow.css"

function LogoShow (){
    return (
        <div id="div-logo-show">
                <img src={`${process.env.PUBLIC_URL}/assets/blackjack.svg`} className="App-logo" alt="logo" />
                <h1>Black Jack</h1>
        </div>
    );
};

export default LogoShow;