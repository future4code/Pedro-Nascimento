import React from "react";
import CardVideo from "./Components/CardVideo";
import "./styles.css";


export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo={"Video 1"} Video={"https://picsum.photos/400/400?a=1"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 2"} Video={"https://picsum.photos/400/400?a=2"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 3"} Video={"https://picsum.photos/400/400?a=3"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 4"} Video={"https://picsum.photos/400/400?a=4"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 5"} Video={"https://picsum.photos/400/400?a=5"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 6"} Video={"https://picsum.photos/400/400?a=6"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 7"} Video={"https://picsum.photos/400/400?a=7"} onClick={reproduzVideo} />
            <CardVideo titulo={"Video 8"} Video={"https://picsum.photos/400/400?a=8"} onClick={reproduzVideo} />



            {/* <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
       */}
          </section>
        </main>

        <footer>
          <h4>Editado - Pedro Fernandes.</h4>
        </footer>
      </div>
    </div>
  );
}
