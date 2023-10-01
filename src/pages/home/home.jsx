import './home.css';

function Home(){

  return (
    <div className="home">
      <div className="geral">
        <div className="titulo">
          <h4>Pronto(a) para começar?</h4>
        </div>
        <div className="conteudo">
          <div className="texto">
            <iframe src="https://www.youtube.com/watch?v=lur5Vmwr_UA&t=4s" frameborder="0" allowfullscreen></iframe>
            <p>Base bot 100% editavel para vc fazer o seu bot</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;