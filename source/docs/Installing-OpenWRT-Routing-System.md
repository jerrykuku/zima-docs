---
title: Installing-OpenWRT-Routing-System
typora-root-url: ..
---
# OpenWrt is the best companion for the ZimaBoard USB stick login version
**-- 5 steps to burn your favourite OpenWrt hombre firmware**

{% note dinfo %}
Topics
With a performance between Raspberry Pi and MicroServer and a price positioning, the best use of the ZimaBoard for many gamers is undoubtedly to be a hundred-dollar class, customizable, OpenWrt / pfSense x86 router with enough computing power.
Based on this simple tutorial, we will share, how to make a USB stick boot disk and after a few steps, log into OpenWrt.
{% endnote %}

**Preparation**

1. PC Host
2. ZimaBoard（Access to the same LAN as the PC）
3. U Disk
4. Keyboard 
5. Minidp to HDMI or DP Adapter
6. Monitor
7. Ethernet Cable 
8. OpenWrt Image（Or download the mirror recommended by the team via this link）
9. balenaEther（Or any of your usual u disk image creation tools）

# Operation steps

## 1. Creating an OpenWrt system on a USB stick
（For detailed steps, please see Universal Third Party System Installation）——插入通用第三方教程的

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-creat-mirror.png)

## 2. ZimaBoard via mini DP to HDMI / DP cable, access to the display,USB Keyboard to ZimaBoard

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-zimaboard-connect.png)

## 3. Insert the USB stick into the ZimaBoard, boot up and click "DEL" to log into the BIOS Page

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-enter-to-bios.png)

## 4. In the Boot option, configure the USB flash drive as Boot Option #1, save the settings, and reboot. After boot, enter the USB drive OpenWrt

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-choose-boot.png)

## 5. Configure your OpenWrt system IP address information and use a PC browser to log into the OpenWrt Luci page

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-enter-openwrt-luci.png)

# Successful login ！！！！

![](images/Installing-OpenWRT-Routing-System/install-openwrt-router-system-complete-install-openwrt.jpeg)

# Summary
Getting OpenWrt to run on a USB stick is a relatively simple way to do it. But as an aspiring gamer, if you wish to write your OpenWrt system to a ZimaBoard eMMC, you can refer to the next tutorial.
If you are interested in running more interesting software services for network enhancement, and home cloud data management on OpenWrt, check out this link!