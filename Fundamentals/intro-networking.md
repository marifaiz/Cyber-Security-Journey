# 🌐 Lab Report: Introductory Networking
**Date:** March 7, 2026
**Platform:** TryHackMe

## 🎯 1. Objective
To understand the basics of how computers communicate, specifically focusing on the OSI Model and essential networking tools like `ping`.

## 🛠️ 2. Tools & Concepts Used
* **Tool:** `ping` - used to test connectivity and find the IP address of a domain.
* **Concept:** ICMP (Internet Control Message Protocol) - the protocol used by ping.
* **Concept:** IPv4 Addressing - identifying servers by their unique numerical address.

## 📝 3. Methodology
1. I learned about the 7 layers of the OSI Model, connecting my Web Dev knowledge (Layer 7 - HTTP) to the Network layer (Layer 3 - IP).
2. I used the Linux Terminal to communicate with a remote server.
3. I successfully resolved a domain name to its specific IP address using the `ping` command.

### Evidence: Terminal Connectivity Test
<img width="927" height="495" alt="Ping Command" src="https://github.com/user-attachments/assets/PASTE_YOUR_PING_IMAGE_LINK_HERE" />

## ✅ 4. Remediation (The Developer's Perspective)
Understanding networking is crucial for web development because:
* **Troubleshooting:** If a website is "down," I can use `ping` to see if the server itself is unresponsive or if it's a higher-level code issue.
* **Latency:** I now understand how "Time to Live" (TTL) and packet travel time affect the performance of the web apps I build.
