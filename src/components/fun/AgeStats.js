import React, {Component} from "react";
import ReactDOM from 'react-dom';

class AgeStats extends Component {
tempsDepuis = date => {
  let auj = Date.now();
  let autreJour = new Date(date).getTime();
  let diff = Math.abs(auj - autreJour);
  let jours = Math.floor(diff / (1000 * 3600 * 24));
  let annees = Math.floor(jours / 365); //arrondie a 40
  jours -= annees * 365; //prend les jours complet - 40 ans et donne les jouyrs depuis 40 ans. 40ans et 306 jours
  let mois = Math.floor(jours / 31); //genre 10 en nov 2017
  jours -= mois * 31; //retourne les jours qui ne font pas un mois 27 jours

  return `Sur terre depuis ${annees} ans, ${mois} mois et ${jours} jours`;
};

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>{this.tempsDepuis(this.props.date)}</h4>
      </div>
    );
  }
}
export default AgeStats
