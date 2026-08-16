# Home Network Security Audit & Hardening

**Category:** Defensive Security / Network Security Auditing (Blue Team)
**Target:** Personal home network — Huawei OptiXstar HG8145X6-10 GPON ONT (MTN-branded)
**Date:** August 2026
**Author:** Mariama Faisal

## Overview

This project documents a hands-on security audit and hardening exercise performed on my
home network router, applying concepts learned in the Google Cybersecurity Certificate
(networking fundamentals, security frameworks, risk-based decision making).

The goal was to move the router from a default/unverified configuration to a documented,
intentionally-configured state — identifying real risks, fixing what could be fixed, and
making informed, justified decisions about controls that weren't implemented.

This is **not** a penetration test. No systems outside my own ownership were tested or
attacked. This is a defensive audit: reviewing configuration against security best
practices and reducing attack surface on a system I own and administer.

## Why This Project

I wanted a first practical cybersecurity project that:
- Used real infrastructure I have legitimate access to (my own home router)
- Applied fundamentals from the Google Cybersecurity Certificate in a hands-on way
- Produced genuine findings and decisions, not just a checklist tick-off
- Could be documented and explained clearly, since communicating findings is as
  important as finding them

## Scope

- Router admin panel configuration (credentials, filtering, logging)
- Wi-Fi network configuration (encryption, password)
- Connected device inventory and verification
- Firmware version review
- Available security controls (MAC filtering, WPS, guest network, firewall logging)

**Out of scope:** ISP-side infrastructure, firmware modification/flashing, testing
devices or networks I don't own.

## Summary of Findings

See [findings.md](./findings.md) for the full detail. In short:

| Area | Status Found | Risk |
|---|---|---|
| Admin login password | Default / not yet changed | High |
| Wi-Fi password | Default (printed on device sticker) | High |
| Connected device count | 21 devices shown vs. ~6.7 expected | Medium (investigated) |
| MAC filtering | Available, not enabled | Low-Medium |
| WPS | Not exposed on this device | N/A (lower risk by default) |
| Firmware update mechanism | No self-service option — ISP-managed | Informational |
| Guest network | Not available on this configuration | Informational |
| Firewall logging | Available, disabled by default | Low |

## Actions Taken

See [remediation.md](./remediation.md) for full detail. In short:

1. Changed router admin login password from default
2. Changed Wi-Fi password from default (sticker) value, on both 2.4G and 5G bands
3. Investigated an unexpectedly high connected-device count (21 vs. ~7-8 expected)
4. Rebooted router to obtain a clean device baseline and confirmed the discrepancy was
   caused by MAC address randomization and stale DHCP leases, not unauthorized access
5. Evaluated MAC filtering, WPS, firmware update options, guest networking, and firewall
   logging — implemented what made sense, and documented reasoned decisions not to
   implement controls where the operational cost outweighed the security benefit for a
   home network

## Key Skill Demonstrated: Investigation, Not Just Configuration

The most valuable part of this project wasn't changing passwords — it was investigating
an anomaly (21 connected devices against an expected ~6-7) rather than assuming the worst
or ignoring it. The process:

1. Noticed the discrepancy
2. Reviewed the full device list across all pages rather than trusting the summary count
3. Identified a pattern (repeated generic hostnames, sequential MAC prefixes) consistent
   with MAC address randomization — a legitimate Android privacy feature
4. Verified the hypothesis by rebooting the router to clear stale leases and confirming
   the device count matched expectations after all known devices reconnected

This mirrors a real SOC analyst workflow: an alert or anomaly doesn't automatically mean
an incident — it means an investigation, and a conclusion backed by evidence.

## Tools Used

- Router web admin interface (Huawei OptiXstar HG8145X6-10)
- Windows Command Prompt (`ipconfig`) to identify the network gateway

## Next Steps / Future Work

- Revisit MAC filtering if household device count stabilizes and maintenance burden
  becomes less of a concern
- Periodically repeat the "reboot → verify device count" check as an ongoing monitoring
  habit
- Explore router logging/monitoring tools with more visibility, if the ISP-managed
  firmware allows it
- Apply the same audit methodology to other home IoT devices
