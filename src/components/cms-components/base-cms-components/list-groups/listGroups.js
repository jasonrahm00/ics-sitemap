import './listGroups.css';

export const BullletListGroup = ({...props}) => {
  return (
    <section className="list-group-component">
      {props.groupHeader ? (<h3>{props.groupHeader}</h3>) : ''}
      {props.column1Header || props.column1Bullets ? (
        <section>
          {props.column1Header ? (<h4>{props.column1Header}</h4>) : ''}
          {props.column1Bullets ? (
            <ul>
              {props.column1Bullets.map((bullet, index) => {
                return (
                  <li key={index}>{bullet}</li>
                )
              })}
            </ul>
          ) : ''}
        </section>
      ) : ''}
      
      {props.column2Header || props.column2Bullets ? (
        <section>
          {props.column2Header ? (<h4>{props.column2Header}</h4>) : ''}
          {props.column2Bullets ? (
            <ul>
              {props.column2Bullets.map((bullet, index) => {
                return (
                  <li key={index}>{bullet}</li>
                )
              })}
            </ul>
          ) : ''}
        </section>
      ) : ''}
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
