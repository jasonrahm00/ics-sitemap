import Homepage from '../components/pages/hompage';
import PDP from "../components/pages/pdp";
import PLP from "../components/pages/plp";
import CategoryContent from "../components/pages/categoryContentPage";

const baseRoutes = [
  {
    path: '/',
    render: () => <Homepage />
  },
  {
    path: '/pdp',
    render: () => <PDP title={'Product'} />
  },
  {
    path: '/plp',
    render: () => <PLP/>
  },
  {
    path: '/category-content',
    render: () => <CategoryContent/>
  },
]

export default baseRoutes;