import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="button">
      <button onClick={() => setDark(!dark)}>
        {dark ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
