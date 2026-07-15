---
title: "Before Android 17, updating an app while it was ru"
date: 2026-07-14T05:27:09.000Z
source: "https://t.me/installerx_revived"
channelName: "InstallerX Revived"
channelUsername: "installerx_revived"
channelAvatar: "/avatars/installerx_revived.jpg"
format: txt
translated: true
tags: ["Before Android 17, updating an app while it was ru"]
---

## 原文

Before Android 17, updating an app while it was running usually meant that the system killed its process and removed its window immediately. From the user's perspective, this could look almost indistinguishable from an app crash.

Starting with Android 17, Google introduced [PackageUpdateActivity](https://android.googlesource.com/platform/frameworks/base/+/refs/heads/android17-release/libs/WindowManager/Shell/src/com/android/wm/shell/packageupdate/PackageUpdateActivity.kt), a temporary placeholder provided by SystemUI and WM Shell.

It is triggered when a running app is replaced while the app owns the root activity of an eligible task. Before killing the old process, the system places this placeholder in the task. Once the update finishes, the system relaunches the updated app, preserving visual continuity instead of making the window suddenly disappear.

InstallerX now supports this Android 17 behavior. After InstallerX updates itself, it recognizes the SystemUI recovery launch, returns to its home screen, and shows an "InstallerX was updated successfully" toast, as demonstrated in the video.

## 简体中文

在 Android 17 之前，更新正在运行的应用通常意味着系统会终止其进程并立即移除其窗口。从用户的角度来看，这几乎与应用崩溃没有区别。

从 Android 17 开始，谷歌引入了 [PackageUpdateActivity](https://android.googlesource.com/platform/frameworks/base/+/refs/heads/android17-release/libs/WindowManager/Shell/src/com/android/wm/shell/packageupdate/PackageUpdateActivity.kt)，这是一个由 SystemUI 和 WM Shell 提供的临时占位程序。

当正在运行的应用被替换，且该应用拥有符合条件的任务根 Activity 时，这个机制就会被触发。在杀死旧进程之前，系统会在任务中放置这个占位程序。更新完成后，系统会重新启动更新后的应用，从而保持视觉连续性，而不是让窗口突然消失。

InstallerX 现在支持这一 Android 17 行为。InstallerX 完成自身更新后，它会识别到 SystemUI 恢复启动，返回主屏幕，并显示一条“InstallerX 已成功更新”的提示，如视频所示。
