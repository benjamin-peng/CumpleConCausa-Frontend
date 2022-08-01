import styles from '../Styles/FAQstyle.css'
import Navbar from '../Components/Navbar';


function FAQ({question, answer}) {
    return (
        <div className="Wrapper">
            <h2 className="questionWrapper">{question}</h2>
            <p className="answerWrapper">{answer}</p>
        </div>
      );
}

export default FAQ;