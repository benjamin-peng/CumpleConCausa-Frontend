import FAQ from "../Components/FAQ";
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';

function FAQs() {
    return (
      <div>
        <Navbar></Navbar>
        <FAQ question="¿Con cuanto tiempo de anticipacion debo planear mi cumple con causa?" 
          answer="Debes empezar a planificar tu cumple con causa con maximo 2 meses y minimo 3 semanas de anticipacion para que sea efectivo."/>
        <FAQ question="¿Puedo hacer un cumpleconcausa con otra persona? Puede ser un cumpleconcausa de mas de una persona?" 
          answer="Claro que si! Nos encantan los cumples con causa dobles y triples. Si tienes algun amigo o familiar que cumple en el mismo mes que tu, pueden hacer un cumple con causa compartido con una meta en comun. Solo es cuestion de ponerse de acuerdo."/>
        <FAQ question="¿Puedo hacer un cumpleconcausa con alguna organizacion que no sale en su website?"
          answer="En este momento estamos trabajando en cumples con causa unicamente con las ONGs registradas en nuestra plataforma. Esto garantiza que las ONGs con las que trabajamos han pasado por un proceso de fiscalizacion y que cumplen con los estandares de calidad y buenas practicas de tercer sector que queremos impulsar desde cumpleconcausa."/>
        <FAQ question="¿Que pasa si no llego a mi meta durante mi cumple con causa?"
          answer="En CCC nuestra filosofia es que cualquier dolar recaudado en un ccc, es un dolar positivo, y un dolar que no hubiera estado dirigido a impacto social positivo si no fuera por que tu te esforzaste en conseguirlo. Lo importante es responsabilizarte y tomar accion por una mejor sociedad, no llegar a la meta."/>
        <Bottom></Bottom>
      </div>
      );
}

export default FAQs;