# Scam/Fraud Message Detector

A rule-based tool that scans text messages for common scam and fraud red flags — built after encountering real MoMo (mobile money) scam attempts in Ghana.

**Live demo:** https://marifaiz.github.io/Cyber-Security-Journey/Projects/scam-message-detector/

## The Problem

Mobile money fraud is a everyday threat in Ghana. A common scam pattern: someone sends a fake "wrong number transfer" message, then follows up asking the victim to dial a USSD code or share a PIN to "reverse" it — which actually drains the victim's account. These messages follow predictable patterns: urgency, requests for codes, fake money transfers, and suspicious links.

This project detects those patterns automatically and gives the user a plain-language risk rating.

## How It Works

The detector checks a message against six red flag categories:

1. **PIN/OTP/code requests** — messages asking for a PIN, OTP, or verification code
2. **Urgency language** — words like "urgent," "immediately," "act now"
3. **Money transfer requests** — "send money," "refund," "wrong account," "transfer"
4. **USSD code patterns** — messages combining "dial" with a `*` code (a strong indicator, since legitimate businesses rarely ask users to dial USSD codes over text)
5. **Too-good-to-be-true offers** — "congratulations," "you have won," "selected"
6. **Suspicious links** — shortened links (bit.ly), "click here," raw http links, WhatsApp links

Each matched category adds to a red flag count, which maps to a risk level:

| Flags matched | Risk level |
|---|---|
| 0 | Safe |
| 1–2 | Low Risk |
| 3+ | High Risk |

The tool then displays the risk level along with which specific flags were triggered, so the user understands *why* a message was flagged — not just a pass/fail verdict.

## Project Versions

This started as a command-line Python tool and was rebuilt as a web app to make it more accessible:

- **V1 — Python (CLI):** [`scam_detector.py`](./scam_detector.py) — takes a message via terminal input, prints the risk assessment
- **V2 — JavaScript (Web App):** [`index.html`](./index.html), [`script.js`](./script.js), [`style.css`](./style.css) — same detection logic, now with a styled, interactive interface anyone can use in a browser

Rebuilding the same logic in a second language was a deliberate choice — it reinforced the underlying logic (loops, conditionals, string matching) independent of syntax, and gave me a chance to debug the same problem in two different environments.

## Tech Stack

- Python (V1)
- HTML, CSS, JavaScript (V2)
- Deployed via GitHub Pages

## Known Limitations & Future Improvements

This is a keyword-matching tool, not a machine learning model — it's intentionally simple and explainable, but that comes with trade-offs:

- **No grammar analysis.** Scam messages often contain grammar or spelling errors, but detecting that reliably needs more than keyword matching.
- **No sender verification.** The tool only analyzes message content, not who sent it. A future version could take a phone number as a separate input and cross-check it against known scam number patterns.
- **Keyword-based, so bypassable.** A scammer who avoids these exact keywords could evade detection. A production version would need broader pattern matching or ML-based classification.
- **Planned next steps:** browser extension for auto-detection on messaging platforms, and eventually real-time alerts.

These were scoped out deliberately for V1/V2 to keep the logic focused and explainable — noted here as a roadmap, not an oversight.

## Try It

Some example messages to test:

- `"Congratulations! You have been selected to win a prize. Click here to claim: bit.ly/claim123"` → High Risk
- `"Dial *170# immediately to reverse the wrong transfer"` → High Risk
- `"Hey, are we still on for lunch tomorrow?"` → Safe

## Disclaimer

This tool is a portfolio/learning project and is not a substitute for official fraud protection services. Always verify suspicious messages through official channels before taking action.

## Author

**Maryam Faisal**
GitHub: [github.com/marifaiz](https://github.com/marifaiz)
