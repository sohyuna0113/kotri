import {MDCTabBar} from '@material/tab-bar';

const Header = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
    });

    // const moveTab = (event: React.MouseEvent<HTMLElement>) => {
    //     console.log(event.target);
    // };

    return (
        <>
            <header className="d-flex fixed-header min-h-80">
                <div className="d-flex align-items-center">
                        <div className="mdc-tab-bar" role="tablist">
                            <div className="mdc-tab-scroller">
                                <div className="mdc-tab-scroller__scroll-area">
                                    <div className="mdc-tab-scroller__scroll-content">
                                        <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex="0">
                                            <span className="mdc-tab__content d-flex flex-row  pdt-10 pdb-8 pdl-8 font-m">
                                                    <span onClick={event => console.log(event)} className="mdc-tab__text-label t-headline7 t-color-primaryC dr-15">Your Trip</span>
                                            </span>
                                            <span className="mdc-tab-indicator mdc-tab-indicator--active">
                                                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                            </span>
                                            <span className="mdc-tab__ripple"></span>
                                        </button>

                                        <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex="0">
                                            <span className="mdc-tab__content d-flex flex-row  pdt-10 pdb-8 pdl-8 font-m">
                                                    <span onClick={event => console.log(event)} className="mdc-tab__text-label t-headline7 t-color-primaryC dr-15">Following</span>
                                            </span>
                                            <span className="mdc-tab-indicator mdc-tab-indicator--active">
                                                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                            </span>
                                            <span className="mdc-tab__ripple"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
