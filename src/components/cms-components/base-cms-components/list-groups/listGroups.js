import './listGroups.css';

export const BulletList = ({...props}) => {
  return(
    <>
      {props.listHeader && <h4>{props.listHeader}</h4> }
      {props.bullets ? (
        <ul>
          {props.bullets.map((bullet, index) => {
            return (
              <li key={index}>{bullet}</li>
            )
          })}
        </ul>
      ) : ''}
    </>
  )
}

export const BullletListGroup = ({...props}) => {
  const HeaderTag = props.headerTag ? props.headerTag : 'h3';
  return (
    <section className={'list-group-component' + (props.bulletLists.length > 1 ? ' two-columns' : '')}>
      {props.groupHeader && <HeaderTag>{props.groupHeader}</HeaderTag> }
      {props.bulletLists && props.bulletLists.map((list, index) => {
        return (
          <section key={index}>
            {list}
          </section>
        )
      })}
    </section>
  )
}

export const LinkListGroup = ({...props}) => {
  const HeaderTag = props.headerTag ? props.headerTag : 'h3';
  const SubHeaderTag = props.subheaderTag ? props.subheaderTag : 'h4';
  return (
    <section className="list-group-component links two-columns">
      {props.header && <HeaderTag>{props.header}</HeaderTag> }
      {props.subheader && <SubHeaderTag>{props.subheader}</SubHeaderTag>}
      {props.links ? (
        <ul>
          {props.links.map((link, index) => {
            return (
              <li key={index}>{link}</li>
            )
          })}
        </ul>
      ) : ''}
      
    </section>
  )
}
