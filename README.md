# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook.  The issue arises from incorrectly updating state within the `useEffect`'s callback, leading to continuous re-renders.

## Problem

The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook attempts to increment the count, but because it does so without referencing a previous value and without dependencies, it creates an infinite render loop. This continuously increases the count and may result in performance issues or even crashes in the browser.

## Solution

The solution involves correctly managing the state update within the `useEffect` hook.  In this case, the `useEffect` should only run once, and we must not update the state inside it using the current state value.