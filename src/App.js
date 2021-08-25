// import logo from './';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="container-fluid-inside">
        <div className="header-outer-container">
          <div className="header-container">
            <a href="/">
              <img
                className="overdue-sticker-header"
                alt="Overdue Header Image"
                src="./overdue-logo.png" />
            </a>
          </div>

        </div>
      </div>
      <div className="container-fluid-inside">
        <div className="header-section-bg row">
          <img className="header-content-image"
            alt="Overdue Screenshots"
            src="./overdue-screenshot.png"
            />
          <div className="header-content-container">
            <h1 className="header-text white-text">
              Simple. Secure. Smooth.
            </h1>
            <p className="header-paragraph-text">
              All-in-one workspace for you and your groups!
            </p>
          </div>
          <div className="home-bottom-links-container">
            <div className="home-download-links">
              <p className="header-paragraph-text">
                Download Overdue now!
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.overdue.app" target="_blank" rel="noopener noreferrer">
                <img
                  src="./overdue-play-store.png"
                  alt="Google Play Store"
                />
              </a>
              <a href="https://apps.apple.com/us/app/overdue-all-in-one-workspace/id1572003722" target="_blank" rel="noopener noreferrer">
                <img
                  src="./overdue-app-store.png"
                  alt="Apple App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
