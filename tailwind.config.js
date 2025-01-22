/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		  },
		extend: {
			fontFamily: {
				caveat:'Caveat',
				birthstone:'Birthstone',
			  },
		  colors: {
			main: 'var(--main)',
			overlay: 'var(--overlay)',
			bg: 'var(--bg)',
			bw: 'var(--bw)',
			blank: 'var(--blank)',
			text: 'var(--text)',
			mtext: 'var(--mtext)',
			border: 'var(--border)',
			ring: 'var(--ring)',
			ringOffset: 'var(--ring-offset)',
			
			secondaryBlack: '#212121', 
		  },
		  borderRadius: {
			base: '6px'
		  },
		  boxShadow: {
			shadow: 'var(--shadow)'
		  },
		  translate: {
			boxShadowX: '4px',
			boxShadowY: '4px',
			reverseBoxShadowX: '-4px',
			reverseBoxShadowY: '-4px',
		  },
		  fontWeight: {
			base: '500',
			heading: '700',
		  },
		  animation: {
			marquee: "marquee 30s linear infinite",
			marquee2: "marquee2 30s linear infinite",
		  },
		  keyframes: {
			marquee: {
			  "0%": { transform: "translateX(0%)" },
			  "100%": { transform: "translateX(-100%)" },
			},
			marquee2: {
			  "0%": { transform: "translateX(100%)" },
			  "100%": { transform: "translateX(0%)" },
			},
		  },
		},
	  },
  plugins: [require("tailwindcss-animate")],
}
