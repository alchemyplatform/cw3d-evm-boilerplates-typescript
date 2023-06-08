
'use client'

import { ConnectKitButton } from "connectkit";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <img className={styles.alchemy_logo} src="/cw3d-logo.png"></img>
      </a>
      <ConnectKitButton />
    </nav>
  );
}
