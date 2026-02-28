# 🛡️ Lab Report: Intro to Offensive Security
**Date:** February 28, 2026
**Platform:** TryHackMe
**User:** marifaiz18

## 1. Objective
The goal of this lab was to demonstrate how an attacker can use directory brute-forcing to find hidden, sensitive pages on a web server.

## 2. Tools & Concepts Used
* **Tool:** `dirb` (Directory Buster) - used to find hidden web directories.
* **Concept:** Offensive Security and Information Gathering.

## 📝 3. Methodology
1. I accessed the TryHackMe AttackBox and opened the Terminal.
2. I ran the command `dirb http://fakebank.thm` to scan for hidden folders.
3. The scan discovered two interesting paths: `/bank-deposit` and `/images`.
4. By navigating to `http://fakebank.thm/bank-deposit`, I was able to bypass the main page and "hack" the bank.

### Evidence: Terminal Scan
<img width="883" height="480" alt="Capture" src="https://github.com/user-attachments/assets/2eb3f3c4-fa34-4ab6-97f6-53390061eaec" />


### Evidence: Successful Hack
<img width="582" height="521" alt="bank-hacked" src="https://github.com/user-attachments/assets/f17f059e-f7c8-4ec2-a104-c74beb03015d" />


## 4. Remediation (The Developer's Fix)
As a Web Developer, I recommend the following to prevent this attack:
* **Access Control:** Sensitive pages like `/bank-deposit` should never be public. They must require authentication (login) and authorization checks.
* **Directory Listing:** Ensure that the web server is configured to prevent directory listing, making it harder for tools like `dirb` to find paths.

---

## 💡 5. Reflection
It was eye-opening to see how a simple command can reveal hidden parts of a website. My web dev background helps me understand exactly why these "hidden" paths are dangerous if not secured.
