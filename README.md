# rechap

> A lightweight, canvas-based CAPTCHA library — no dependencies, no fuss.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/attendance1978-wq/rechap/badge)](https://www.jsdelivr.com/package/gh/attendance1978-wq/rechap)

---

## Features

- **Random 6-character codes** — alphanumeric, regenerated on every attempt
- **Canvas rendering** — distortion, noise lines, and slight rotation baked in
- **Zero dependencies** — pure HTML, CSS, and JavaScript
- **Auto-regenerate** — new CAPTCHA is issued automatically on a wrong answer
- **Minified build included** — drop-in ready for production

---

## Installation

### Via CDN (recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/attendance1978-wq/rechap@main/recaptcha.min.js"></script>
```

### Manual

Download `recaptcha.min.js` from this repository and include it in your project:

```html
<script src="recaptcha.min.js"></script>
```

---

## Usage

**1. Add the HTML elements**

```html
<canvas id="captchaCanvas" width="200" height="60"></canvas>
<input type="text" id="captchaInput" placeholder="Enter CAPTCHA" />
<button id="checkBtn">Verify</button>
```

**2. Initialize**

```html
<script>
  const captcha = new ReCaptcha("captchaCanvas", "captchaInput", "checkBtn");
</script>
```

A full working example is available in [`index.html`](./index.html).

---

## Project Structure

```
rechap/
├── recaptcha.js        # Source — CAPTCHA logic
├── recaptcha.min.js    # Minified production build
├── index.html          # Usage example
└── README.md
```

---

## How It Works

1. A random 6-character code is generated on initialization.
2. The code is drawn onto an `<canvas>` element with noise lines and character distortion.
3. The user types the code into the input field and submits.
4. The input is compared to the stored code (case-insensitive by default).
5. On a mismatch, a new CAPTCHA is generated automatically.

---

## Security Notice

rechap is a **client-side only** CAPTCHA. The validation logic is visible in the browser, which means:

- ✅ Suitable for lightweight spam prevention on simple forms and demos
- ❌ Not a reliable defense against determined or automated bots

For anything security-critical, consider pairing rechap with server-side validation, rate limiting, or a service like [Google reCAPTCHA](https://www.google.com/recaptcha/).

---

## Roadmap

- [ ] Server-side verification support
- [ ] Image-based CAPTCHA mode
- [ ] Invisible/behavioral CAPTCHA mode
- [ ] NPM package

---

## License

MIT © [attendance1978-wq](https://github.com/attendance1978-wq)
