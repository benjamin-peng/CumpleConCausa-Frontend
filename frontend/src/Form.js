import NextButton from './NextButton';

const Form = () => {
    return (  
        <div className="form">
            <h3>Glad to have you on board!</h3>
            <p>First, leave us some information to create your file:</p>
            <form>
                <label>First Name</label>
                <input type="text" required />
                <label>Last Name</label>
                <input type="text" required />
                <label>Phone</label>
                <input type="number" required />
                <label>Email Address</label>
                <input type="text" required />
            </form>
            <NextButton dest="/form/video"></NextButton>
        </div>
    );
}
 
export default Form;