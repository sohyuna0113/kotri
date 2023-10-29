import {MDCRipple} from '@material/ripple';
const Card = (props) => {
    const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
    const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
        return new MDCRipple(el);
    });
    return (
        <>
            <div className="mdc-card mdc-card--outlined">
                <div className="mdc-card__primary-action">
                    <div className="mdc-card__media mdc-card__media--square">
                        <div className="mdc-card__media-content">{props.name}</div>
                    </div>
                    <div className="mdc-card__ripple"></div>
                </div>
                <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">
                        <button className="mdc-button mdc-card__action mdc-card__action--button">
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Action 1</span>
                        </button>
                        <button className="mdc-button mdc-card__action mdc-card__action--button">
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Action 2</span>
                        </button>
                    </div>
                    <div className="mdc-card__action-icons">
                        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                                title="Share">share
                        </button>
                        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                                title="More options">more_vert
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
