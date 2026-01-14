/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float-in': 'floatIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'slide-left': 'slideInLeft 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'slide-right': 'slideInRight 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'morph': 'morphIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'glow': 'glowPulse 2s ease-in-out infinite',
        'timeline': 'scrollIn cubic-bezier(0.16, 1, 0.3, 1) both, fadeOut ease-out both',
      },
      keyframes: {
        floatIn: {
          'from': { opacity: '0', transform: 'translateY(60px) scale(0.95)', filter: 'blur(10px)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' }
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-100px) rotate(-5deg)' },
          'to': { opacity: '1', transform: 'translateX(0) rotate(0deg)' }
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(100px) rotate(5deg)' },
          'to': { opacity: '1', transform: 'translateX(0) rotate(0deg)' }
        },
        morphIn: {
          'from': { opacity: '0', transform: 'scale(0.8) rotate(10deg)', 'border-radius': '50%' },
          'to': { opacity: '1', transform: 'scale(1) rotate(0deg)', 'border-radius': '20px' }
        },
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(37, 99, 235, 0.6)' }
        },
        scrollIn: {
          'from': { opacity: '0', transform: 'scale(0.85) rotate(-8deg) translateX(-60px)', filter: 'blur(8px)' },
          'to': { opacity: '1', transform: 'scale(1) rotate(0deg) translateX(0)', filter: 'blur(0)' }
        },
        fadeOut: {
          'to': { opacity: '0.3', transform: 'scale(0.95) translateY(20px)', filter: 'blur(4px)' }
        }
      }
    },
  },
  plugins: [],
}
