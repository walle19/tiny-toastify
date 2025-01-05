# Tiny Toastify

A lightweight toast notification library.

✨ Idea Overview
A minimalistic and easy-to-use toast notification library that enables developers to quickly add toast messages (success, error, info, warning) to their web applications without dependencies on heavy frameworks or UI libraries.


## Installation

```bash
npm install tiny-toastify

🛠️ Core Features
1. Customizable Toasts: Title, message, icon, duration, and actions (e.g., undo button).
1. Toast Types: Pre-built styles for success, error, warning, and info.
1. Lightweight: Less than 5KB gzipped.
1. Responsive Design: Toasts work well on both desktop and mobile devices.
1. Promise-based API: Automatic toast for async operations (loading, success, error).
1. CSS Injection: Default styles are optional and easily overridden.

🎨 Customization Options
* Default and custom CSS classes.
* Positioning (top-left, top-right, bottom-left, bottom-right).
* Transition effects (slide, fade, zoom).

🚀 Why It’s Useful?
* No need for heavy UI libraries just for notifications.
* Easy integration in vanilla JS or frameworks like React, Vue, or Angular.
* Highly configurable yet simple API.

🚀 Project Structure
tiny-toastify/
├── dist/              # Compiled library files (output)
├── src/              # Source code
│   ├── index.js       # Entry point
│   ├── toast.js       # Core toast logic
│   ├── styles.css     # Default styles
│   └── utils.js       # Utility functions
├── example/          # Example usage project
│   ├── index.html
├── .gitignore        # Ignore unnecessary files
├── package.json      # npm metadata
├── README.md         # Documentation
└── LICENSE           # License file
