import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li className="white-type nav-element">Hummana</li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <a>Retreats</a>
            <a>Mentorships</a>
          </div>
        </li>
        <li className="white-type nav-element">About</li>
      </ul>
    </nav>
  );
}
