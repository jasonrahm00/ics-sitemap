import './footer.css';
import FirstFooterColumn from './footer-columns/firstFooterColumn';
import SecondFooterColumn from './footer-columns/secondFooterColumn';
import ThirdFooterColumn from './footer-columns/thirdFooterColumn';
import FourthFooterColumn from './footer-columns/fourthFooterColumn';

function Footer() {
  return (
    <footer>
      
      <nav className="content-wrapper">
        <FirstFooterColumn />
        <SecondFooterColumn />
        <ThirdFooterColumn />
        <FourthFooterColumn />
      </nav>
      
    </footer>
  );
}

export default Footer;