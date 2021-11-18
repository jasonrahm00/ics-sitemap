import './mediaAdjText.css';
import LinkButton from '../base-cms-components/link-button/linkButton'; 

function MediaAdjText({...props}) {
  return (
    <>
      {props.showSpecs ? props.specs : ''}
      <div className={props.withMargins === true ? 'content-wrapper' : ''}>
        <div className={'media-adj-text-content content-wrapper ' + (props.textPlacement === 'left' ? 'text-left' : '')}>
          <div className='media-wrapper'>
            {props.videoId ? (
              <>
                <iframe width="650" height="366" src={'https://www.youtube-nocookie.com/embed/' + props.videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </>
            ) : ''}
            {props.image ? (<img src={props.image} alt="" />) : ''}
          </div>
          <div className={'text-wrapper ' + (props.textPlacement === 'left' ? 'padding-right' : '')}>
            {props.header ? (<h2>{props.header}</h2>) : ''}
            {props.subheader ? (<h3>{props.subheader}</h3>) : ''}
            {props.bodyText ? props.bodyText : ''}
            {props.ctaText && props.ctaUrl ? (
              <LinkButton to={props.ctaUrl} ctaText={props.ctaText} />
            ) : ''}

            {/* Bullet Section */}
            {props.bulletGroup ? props.bulletGroup : ''}

            {/* Link Group */}
            {props.linkGroup ? props.linkGroup : ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaAdjText;