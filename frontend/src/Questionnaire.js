import NextButton from './NextButton';

const Questionnaire = () => {

    const handleClick = () => {
        
    };

    return (  
        <div className="questionnaire">
            <h3>Time to find an NGO partner!</h3>
            <p>Fill out this form to be matched with an NGO that shares your unique passions:</p>
            <p>If you had to choose how to spend your Saturday, what would you choose?</p>
            <form>
                <input type="radio" name="findNGO"required />
                <label>I would go to Arraiján to reforest, getting my hands dirty with mud, planting seedlings. </label>
                <input type="radio" name="findNGO" required />
                <label>I would visit a girls' home in the city, play with them and help them comb their hair. </label>
                <input type="radio" name="findNGO" required />
                <label>I would party or go to the mall, but I would be willing to donate to a cause.</label>
            </form>
            <NextButton handleClick={handleClick}></NextButton>
        </div>
    );
}
 
export default Questionnaire;