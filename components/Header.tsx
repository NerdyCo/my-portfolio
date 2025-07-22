const Header = () => {
  return (
    <header className="flex flex-row justify-between p-8 md:p-10 lg:p-12">
      <div>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/pixel-cat.png"
          alt="pixel-cat"
        />
      </div>
      <div>
        <ul className="flex text-sm gap-2">
          <li>
            <a href="#">INA</a>
          </li>
          <span>/</span>
          <li>
            <a href="#">ENG</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
