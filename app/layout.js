import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "io.net",
	description: "io.net",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-black text-white`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
