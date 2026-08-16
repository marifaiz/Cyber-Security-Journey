# Remediation & Decisions

This document tracks what was changed, what was deliberately left as-is, and the
reasoning behind each decision. Security work isn't just "enable everything" — it's
weighing risk against operational cost for the specific environment. That reasoning is
documented here.

## 1. Admin Login Password — CHANGED

**Before:** Default/near-default credentials (flagged by the router's own login page)
**After:** Strong unique password set (12+ characters, mixed case, numbers, symbols)
**Impact on household:** None — this only affects access to the router's configuration
panel, not internet connectivity.

## 2. Wi-Fi Password — CHANGED

**Before:** Default password matching the sticker on the physical device
**After:** Strong unique password set on both 2.4G and 5G bands
**Impact on household:** All devices disconnected and required manual reconnection with
the new password. Timed deliberately to avoid interrupting an active video call in the
household.

## 3. Connected Device Anomaly — INVESTIGATED, RESOLVED

**Action taken:**
- Full device list reviewed across all pages (not just the summary count)
- Router rebooted to clear stale DHCP lease entries
- All household devices reconnected with new Wi-Fi password
- Device count re-verified post-reboot: matched expected 6-7 devices, all recognized

**Outcome:** No unauthorized access found. Root cause was MAC address randomization
(a legitimate Android privacy feature) combined with stale/duplicate entries in the
router's device history table.

## 4. MAC Filtering (Whitelist) — EVALUATED, NOT IMPLEMENTED

**Decision:** Not implemented.

**Reasoning:** MAC whitelisting would block any device not explicitly pre-approved, even
with the correct Wi-Fi password. While this is a meaningful security control, it
introduces an ongoing manual maintenance burden: every new or replacement household
device would require manually retrieving its MAC address and adding it to the router's
whitelist before it could connect.

For this household's size and usage pattern, the operational cost was judged to outweigh
the incremental security benefit, particularly since the higher-risk issues (default
credentials) were already remediated. This is documented as a conscious risk-acceptance
decision, not an oversight.

**Revisit condition:** If unauthorized/unrecognized devices are ever found on the
network in the future, this decision should be reconsidered.

## 5. WPS — NO ACTION NEEDED

Not exposed on this device. No action required; documented as a positive baseline
finding.

## 6. Firmware Updates — NO ACTION AVAILABLE

**Decision:** No self-service update path exists on this ISP-branded device.

**Reasoning:** Manually sourcing and flashing third-party or unofficial firmware for a
carrier-locked device was deliberately avoided, since it carries risk of bricking the
device, voiding warranty, or introducing unverified/modified firmware — a worse outcome
than remaining on ISP-managed firmware.

**Recommendation:** Periodically contact MTN support to confirm the device is on a
current firmware version, especially if experiencing connectivity issues.

## 7. Guest Network — NO ACTION AVAILABLE

Not available in this router's configuration options. Documented as a limitation of the
current ISP-provided hardware/configuration rather than a fixable gap.

## 8. Firewall Logging — EVALUATED, LEFT DISABLED

**Decision:** Left disabled.

**Reasoning:** The router's own interface warns that enabling firewall logging may
degrade device forwarding performance. For a home network without a specific active
concern (e.g., no evidence of compromise or suspicious activity), the performance
tradeoff was judged not to be worth the visibility gained.

**Revisit condition:** If unusual network behavior is observed in the future
(unexplained slowness, unrecognized devices, unexpected data usage), enabling firewall
logging temporarily would be a reasonable next diagnostic step.

## Decision-Making Pattern

Across items 4 and 8, the same reasoning approach was applied consistently: security
controls were evaluated on their actual risk reduction for *this specific home network*
context, weighed against real operational/maintenance cost — rather than defaulting to
"enable every available security feature" regardless of practical impact. This reflects
a risk-based approach rather than a checklist-only approach.
