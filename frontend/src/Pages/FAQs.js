import FAQ from "../Components/FAQ";
import Navbar from '../Components/Navbar';
import Bottom from '../Components/Bottom';

function FAQs() {
    return (
      <div>
        <Navbar></Navbar>
        <FAQ question="Example FAQ" 
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl sem, ornare in rutrum nec, pulvinar sit amet erat. Vestibulum blandit neque vel ex dapibus cursus."/>
        <FAQ question="Example FAQ2" 
          answer="Aliquam egestas libero enim, nec tincidunt enim vestibulum non. Vivamus mollis ipsum vel vehicula tempor. Phasellus placerat odio eu scelerisque cursus. Nam sagittis in urna eu aliquet. Fusce sollicitudin et diam et feugiat. Vestibulum mauris mi, consectetur non accumsan et, congue nec justo. Fusce lorem ex, luctus ut sem vel, tincidunt ultricies dolor. Integer dapibus ipsum purus, vitae rutrum turpis iaculis vulputate. Ut id pulvinar tellus. Quisque nisl quam, iaculis et nulla at, hendrerit vulputate mi. Aenean gravida mattis tortor, ac accumsan sapien dapibus quis."/>
        <FAQ question="Example FAQ3"
          answer="In a lorem bibendum, iaculis tortor in, accumsan mauris. Phasellus sagittis tristique odio vitae accumsan. Sed quis metus urna. Vestibulum ornare, augue convallis lobortis fringilla, enim ligula finibus risus, et lacinia sapien sapien id risus. Sed pharetra vehicula ornare. Morbi ac pharetra nulla. Phasellus consectetur libero nisl, suscipit tempor eros interdum mollis."/>
        <Bottom></Bottom>
      </div>
      );
}

export default FAQs;