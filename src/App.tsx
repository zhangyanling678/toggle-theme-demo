import { useState } from 'react';

function App() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = (event: MouseEvent) => {
    setDark(!isDark);
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );
    // @ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      root.classList.remove(isDark ? 'dark' : 'light');
      root.classList.add(isDark ? 'light' : 'dark');
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <div className="flex h-screen flex-col justify-between bg-white p-4 dark:bg-slate-950">
      <div className="text-gray-800 dark:text-gray-100">
        CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW
        共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界CCW 共创世界
      </div>
      <div>
        <button
          className="rounded-full border p-2 outline-none  dark:border-slate-900/50 dark:bg-slate-900 dark:text-slate-100"
          onClick={toggleTheme}
        >
          {!isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
