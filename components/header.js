import React from 'react';
import Link from 'next/link';

export default ({ title = '' }) => {
  const toggle = () => {
    const isDark = window.localStorage.getItem('jackleslie-dark-mode') != 0;
    window.localStorage.setItem('jackleslie-dark-mode', isDark ? 0 : 1);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <article>
      {title ? (
        <hgroup>
          <Link href="/">
            <a>
              <h1>Jack Leslie</h1>
            </a>
          </Link>
          <h1> / {title}</h1>
        </hgroup>
      ) : (
        <Link href="/">
          <a>
            <h1>Jack Leslie</h1>
          </a>
        </Link>
      )}

      <button aria-label="Toggle Theme" title="Toggle Theme" type="button" onClick={toggle}>
        <div aria-label="Sun" className="sun" />
        <div aria-label="Moon" className="moon" />
      </button>
    </article>
  );
};
