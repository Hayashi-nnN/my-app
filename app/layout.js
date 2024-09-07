import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
})

export const viewport = {
	themeColor: "#ffffff",
	"minimum-scale": 1,
	"initial-scale": 1,
	width: "device-width",
	"shrink-to-fit": "no",
	"viewport-fit": "cover"
}

export const metadata = {
	title: "니콘내콘",
	description:
		"기프티콘 판매 및 구매 1위 플랫폼, 스타벅스 기프티콘부터 모바일상품권까지 일상에서의 할인을 받아보세요.",
	manifest: "/manifest.json",
	icons: [
		{ rel: "icon", url: "/assets/logo-192x192.png", sizes: "192x192" }
		// 추가 아이콘 정보
	]
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
