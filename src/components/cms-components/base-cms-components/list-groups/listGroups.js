import './listGroups.css';

export const BulletList = ({...props}) => {
  return(
    <>
      {props.listHeader ? (<h4>{props.listHeader}</h4>) : ''}
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
  return (
    <section className="list-group-component">
      {props.groupHeader ? (<h3>{props.groupHeader}</h3>) : ''}
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
  return (
    <section className="list-group-component links">
      {props.groupHeader ? (<h3>{props.groupHeader}</h3>) : ''}
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
