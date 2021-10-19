import ContentPage from "../components/pages/contentPage";
import PLP from "../components/pages/plp";

import { 
  ConcreteCutting,
  PipeCutting
} from '../data/cards/cardGroupings';

const useRoutes = [
  {
    path: '/products/concrete-cutting',
    render: () => <ContentPage title={'Concrete Cutting'} cards={ConcreteCutting} showBrand="true" />
  },
  {
    path: '/products/pipe-cutting',
    render: () => <ContentPage title={'Pipe Cutting'} cards={PipeCutting} showBrand="true" />
  },
  {
    path: '/products/steel-cutting',
    render: () => <PLP title={'Steel Cutting'} />
  },
  {
    path: '/products/power-supply',
    render: () => <PLP title={'Power Supply'} />
  }
]

export default useRoutes;