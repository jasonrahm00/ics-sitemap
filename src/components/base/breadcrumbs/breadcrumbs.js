import { useLocation } from 'react-router-dom';

import './breadcrumbs.css';

function Breadcrumbs({...props}) {

  const location = useLocation();
  const breadcrumbs = location.pathname;
  let breadPaths = breadcrumbs.split('/');
  breadPaths.splice(0, 1, 'home');

  breadPaths = breadPaths.map(item => {
    if(item === 'ics') {
      return item.toUpperCase();
    } else if(item.indexOf('-') > -1) {
      let twoWords = item.split('-');
      twoWords = twoWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return twoWords.join(' ');
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  });

  return (
    <div className="content-wrapper breadcrumbs">
      <ol>
        {breadPaths.length && breadPaths.map((crumb, index) => {
          return (
            <li key={index}>{crumb}</li>
          )
        })}
      </ol>
    </div>
  );
}

export default Breadcrumbs;