import "../css/Footer.css"

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-subContainer">
        <span className="footer-item">Get the IMDb App</span>
        <span className="footer-item">Help</span>
        <span className="footer-item">Site Index</span>
        <span className="footer-item">ImDbPro</span>
        <span className="footer-item" >Box Office Mojo</span>
        <span className="footer-item">ImDb Developer</span>
      </div>

      <div className="footer-subContainer">
        <span className="footer-item">Press Room</span>
        <span className="footer-item">Advertising</span>
        <span className="footer-item">Jobs</span>
        <span className="footer-item">Conditions of Use</span>
        <span className="footer-item">Privacy Policy</span>
        <span className="footer-item">Your Ads Privacy Choices</span>
      </div>
      <div className="footer-subContainer">
        an amazon company
      </div>
      <div className="footer-subContainer">© 1990-2023 by IMDb.com, Inc.</div>
    </div>
  );
}
