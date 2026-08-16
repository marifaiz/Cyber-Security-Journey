# Findings

Router: Huawei OptiXstar HG8145X6-10 GPON ONT (MTN-branded)
Software Version at time of audit: V5R022C10S336

## Finding 1: Default Admin Login Credentials

**Status:** Confirmed default
**Risk:** High

The router's own login page displayed a built-in warning: *"The login password cannot be
the default one. Change it immediately."* This confirmed the admin panel was still using
default or near-default credentials.

**Why this matters:** Default admin credentials for common router models/brands are
publicly documented online. Anyone on the local network (or in some cases, remotely, if
remote management were enabled) could gain full administrative control of the router,
including the ability to redirect traffic, disable security features, or expose the
network to further attack.

**Resolution:** See [remediation.md](./remediation.md).

## Finding 2: Default Wi-Fi Password

**Status:** Confirmed default
**Risk:** High

The Wi-Fi (WLAN) password in use matched the "WLAN key" printed on the physical sticker
on the router itself.

**Why this matters:** Default Wi-Fi passwords printed on stickers are often generated
using predictable algorithms tied to the device's MAC address or serial number, which
have in some cases been reverse-engineered for specific router models. Additionally,
anyone with physical access/visibility of the sticker (e.g., a visitor, photo, or
delivery person) could read the password directly.

**Resolution:** See [remediation.md](./remediation.md).

## Finding 3: Connected Device Count Discrepancy

**Status:** Investigated and resolved — false positive
**Risk:** Initially assessed as Medium; downgraded to none after investigation

The router's home dashboard reported **21 Wi-Fi devices** connected, while the expected
number of household devices was **7-8** (1 laptop, remaining phones).

### Investigation Process

1. Reviewed the full connected-device list (4 pages of entries) rather than relying on
   the summary count alone.
2. Identified that many entries were duplicates: the same physical device was listed
   twice — once with an IPv4 address (`192.168.100.x`) and once with an IPv6 link-local
   address (`fe80::...`) — sharing the same MAC address.
3. Identified a second pattern: multiple entries with a generic hostname
   (`android-3f...`), generic device type (`android-dhcp`), and MAC addresses sharing a
   common OUI prefix (`00:08:22`), appearing far more often than the number of Android
   devices actually owned by the household.
4. This pattern is consistent with **MAC address randomization**, a privacy feature in
   modern Android devices where a new, temporary MAC address is generated each time the
   device reconnects to a network. Over time, this can cause a router's device history
   table to accumulate many stale entries that all originate from the same 1-2 physical
   devices.
5. To verify this hypothesis with evidence (rather than assumption), the router was
   rebooted to clear the stale DHCP lease table, and all household devices were asked to
   reconnect with a newly-set Wi-Fi password.
6. Post-reboot, the device count matched the expected number (7-8), with every listed
   device recognized and accounted for.

**Conclusion:** The elevated device count was not indicative of unauthorized access. It
was caused by a combination of duplicate IPv4/IPv6 entries and MAC randomization
generating repeated entries for the same physical devices, compounded by stale DHCP
leases that hadn't been cleared.

**Recommendation for ongoing monitoring:** Periodically reboot the router and check the
device count immediately afterward to get a clean baseline, and compare it against the
number of devices actually expected to be online. A persistently inflated count
*immediately following a reboot* would be a stronger signal worth investigating further
(see README "Next Steps").

## Finding 4: MAC Filtering Not Enabled

**Status:** Available but not enabled
**Risk:** Low-Medium

The router supports MAC address whitelisting (Wi-Fi MAC Filtering), which would restrict
network access to only pre-approved devices, regardless of whether the correct Wi-Fi
password is known.

**Decision:** Not implemented. This was a deliberate, informed decision rather than an
oversight — see [remediation.md](./remediation.md) for the reasoning.

## Finding 5: WPS Not Available

**Status:** Not exposed in this router's interface
**Risk:** N/A — informational

No WiFi Protected Setup (WPS) option was found anywhere in the admin interface. WPS is a
known weak point on many consumer routers (particularly PIN-based WPS, which is
vulnerable to brute-force attacks). Its absence here is a neutral-to-positive finding —
one less attack surface to manage.

## Finding 6: No Self-Service Firmware Updates

**Status:** Informational
**Risk:** Informational / limitation

No "check for update" or manual firmware upgrade option was found in the admin
interface. This is consistent with many ISP-branded routers, where firmware updates are
pushed centrally by the ISP (MTN) rather than managed by the end user.

**Note:** No attempt was made to manually source or flash third-party firmware, as doing
so on ISP-locked/carrier equipment carries real risk (bricking the device, voiding
warranty, or introducing unofficial/modified firmware — which would itself be a security
risk).

## Finding 7: No Guest Network Option

**Status:** Not available on this configuration
**Risk:** Informational / limitation

No guest network / guest Wi-Fi option was found under the WLAN configuration menus on
this router. This limits the ability to segregate visitor or IoT device traffic from
primary household devices.

## Finding 8: Firewall Logging Disabled by Default

**Status:** Available but disabled
**Risk:** Low

The router includes a firewall logging feature, which was disabled by default. The
interface notes that enabling it may degrade device forwarding performance.

**Decision:** Left disabled. See [remediation.md](./remediation.md) for reasoning.
