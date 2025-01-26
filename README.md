# React Router v6 useParams Hook Returns Empty Object Outside Route Component

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook only works within components that are direct children of a `<Route>` component.  If you try to use it in a nested component that isn't a direct child of a `<Route>`, it will return an empty object.

## Problem

The `IncorrectUsage.js` file showcases the problematic scenario.  The `NestedComponent` attempts to use `useParams`, but because it's not directly nested within a route, the hook returns an empty object.

## Solution

The `CorrectUsage.js` file provides the correct approach.  `useParams` is used directly within the component that is a child of the `<Route>`.