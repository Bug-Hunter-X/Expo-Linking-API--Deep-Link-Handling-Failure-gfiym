# Expo Linking API Deep Link Issue

This repository demonstrates a bug and its solution related to the Expo `Linking` API's failure to handle deep links properly.  The app fails to register a custom URL scheme or to process incoming URLs intended to trigger actions within the application.

The `deepLinkBug.js` file showcases the problematic implementation, while `deepLinkSolution.js` provides a corrected version demonstrating best practices for handling deep links in Expo applications.

## Bug:
The bug is characterized by the `Linking.addEventListener` callback function failing to fire when a deep link is opened.  Additionally, `Linking.getInitialURL` consistently returns `null`, preventing the app from processing any initial URLs passed in upon launching.

## Solution:
The solution involves verifying the URL scheme is properly declared and handled, checking the usage of `Linking.getInitialURL` during app initialization, and ensuring event listeners are correctly attached and detached.