/* global document window */
import React from "react";
import Head from "next/head";

export default () => {
  const toggle = () => {
    const isDark = window.localStorage.getItem("jackleslie-dark-mode") != 0;
    window.localStorage.setItem("jackleslie-dark-mode", isDark ? 0 : 1);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main>
      <Head>
        <title>Jack Leslie</title>
      </Head>

      <article>
        <h1>Jack Leslie</h1>
        <button
          aria-label="Toggle Theme"
          title="Toggle Theme"
          type="button"
          onClick={toggle}
        >
          <div aria-label="Sun" className="sun" />
          <div aria-label="Moon" className="moon" />
        </button>
      </article>

      <p>
        Final year Computer Science student at the University of St Andrews,
        frontend developer and JavaScript enthusiast.
      </p>
      <p>
        I was an intern at{" "}
        <a href="https://transferwise.com" className="transferwise">
          TransferWise
        </a>{" "}
        and will be returning as a graduate software engineer.
      </p>
      <p>
        If you want to get in touch you can{" "}
        <a href="mailto:jackleslie@protonmail.com" className="protonmail">
          email
        </a>{" "}
        me, and you can find me online through{" "}
        <a href="https://keybase.io/jackleslie" className="keybase">
          Keybase
        </a>
        .
      </p>
    </main>
  );
};
