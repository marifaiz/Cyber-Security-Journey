# 🛡️ Lab Report: Intro to Defensive Security
**Date:** February 28, 2026
**Platform:** TryHackMe
**User:** marifaiz18

---

## 1. Objective
The goal of this lab was to experience the daily tasks of a Junior Security Analyst, specifically focused on SOC (Security Operations Center) monitoring and incident response.

## 2. Tools & Concepts Used
* **Concept:** SIEM (Security Information and Event Management) - used to monitor network traffic and alerts.
* **Concept:** Incident Response - the process of reacting to a security threat.
* **Action:** IP Blocking - preventing a malicious source from communicating with the network.

## 3. Methodology (The Investigation)
1. I used a simulated SIEM environment to monitor incoming web traffic.
2. I identified a malicious IP address that was attempting to attack the server.
3. I followed the incident response protocol to block the IP and secure the network.

### Evidence: Threat Neutralized
<img width="927" height="495" alt="IP_Blocked" src="https://github.com/user-attachments/assets/b034ab7f-bf9f-4b69-8198-07b9636ffe89" />

## 4. Remediation (The Developer's Perspective)
As a developer, I can support defensive security by:
* **Input Validation:** Ensuring that user inputs are checked to prevent the types of attacks that trigger these SOC alerts.
* **Rate Limiting:** Implementing code that automatically slows down or blocks an IP if it makes too many requests in a short time, which helps the "Blue Team" stop automated attacks.

---

## 5. Reflection
This lab showed me the "other side" of the story. While offensive security is about finding holes, defensive security is about the constant vigilance required to keep a company safe.
