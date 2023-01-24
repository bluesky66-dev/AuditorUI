import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from "@mui/material";


const editions = [
  {
	name: 'Home',
	href: '/',
  },
  {
	name: 'Audit Dashboard',
	href: '/audit-dashboard',
  },
  {
	name: 'Auditor Dashboard',
	href: '/auditor-dashboard',
  },
  {
	name: 'Manager Dashboard',
	href: '/manager-dashboard',
  },
]

export default function Navbar() {
	const { asPath } = useRouter()
	
	return (
		<nav className={`${styles.navbar}`}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/Smart Contract Auditing-logos_transparent.png"
				></img>
			</a>
			<div className="justify-between">
            {editions.map((item, i) => {
              return (
                <Button
				variant="contained"
				color="primary"
				size="medium"
				style={{marginRight: 15, borderRadius:20, backgroundColor: 'transparent', opacity: asPath === item.href ? 1 : 0.5, fontWeight: "200", fontSize: 15}}
			>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              )
            })}
          </div>

			<ConnectButton></ConnectButton>
		</nav>
	);
}
