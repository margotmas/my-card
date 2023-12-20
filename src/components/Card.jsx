/* eslint-disable react/no-unescaped-entities */
import "../style.scss";
import Stars from "./Stars";

function Card() {
  return (
    <div className="myCard">
      <img src="/album-music.jpg" alt="Album Music" className="Img" />
      <div className="myText">
        <h2 className="Artist">TapeTone</h2>
        <hr className="TitleLine" />
        <div className="Album">
          <h3>Rhythms Rewound</h3>
          <p>Date de sortie : 12 Septembre 2017</p>
          <p>Genre : Pop/Rock Electro</p>
          <p>
            'Rhythms Rewound' est un mélange captivant de pop entraînante et de
            sonorités électro-rock innovantes. Cet album emblématique explore
            des thèmes de renaissance personnelle et d'évolution à travers des
            compositions méticuleuses et des paroles évocatrices. Avec des
            mélodies accrocheuses et des beats énergiques, cet opus offre une
            expérience sonore immersive qui ne manquera pas de captiver les
            auditeurs en quête de nouvelles sensations musicales.
          </p>
        </div>
        <div className="myStars">
          <Stars />
        </div>
      </div>
    </div>
  );
}

export default Card;
