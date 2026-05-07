# TINF24F_2-MOD-2v0 — Module Documentation (MOD)

**Project:** BaSyx Viewer Plugin Extension  
**Module:** AAS List Sorting  
**Team:** Team 2  
**Role owner:** David Ehrhardt (System Developer)  
**Date:** 2026-05-03  
**Status:** v1.0  

---

## Table of Contents

- [Version Control](#version-control)
- [1. Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Scope](#12-scope)
  - [1.3 Definitions, Acronyms, Abbreviations](#13-definitions-acronyms-abbreviations)
- [2. Module: AAS List Sorting](#2-module-aas-list-sorting)
  - [2.1 Overview](#21-overview)
  - [2.2 Component Architecture](#22-component-architecture)
  - [2.3 Data Flow](#23-data-flow)
  - [2.4 Sorting Behavior & Implementation Details](#24-sorting-behavior--implementation-details)
  - [2.5 Known Limitations](#25-known-limitations)

---

## Version Control

| Version | Date       | Author         | Notes                                                           |
|---------|------------|----------------|-----------------------------------------------------------------|
| 1.0     | 2026-05-03 | David Ehrhardt | Initial documentation of the sorting functionality inside the AAS list. |

---

## 1. Introduction

### 1.1 Purpose

This Module Documentation (MOD) outlines the design and implementation of the **AAS List Sorting Feature**. This capability was developed to address user requirements ([FR.002](../SRS.md#41-fr002--sorting-of-aas-shells)) to improve usability by allowing users to organize their loaded Asset Administration Shells dynamically based on specific administrative and identification properties. It directly supports [UC01](../CRS.md#31-uc01-find-and-view-asset-administration-shell-aas-data-) defined in the Customer Requirements Specification by allowing users to efficiently organize their data to locate a specific AAS.

### 1.2 Scope

This document details the frontend implementation of the sorting logic. It covers both the user interface components located in `FilterAAS.vue` and the event-driven communication between the sorting overlay and the main `AASList.vue` view. It specifically targets the reordering of data structures in the Vue runtime environment and does not involve backend persistence or database-level queries. 

### 1.3 Definitions, Acronyms, Abbreviations

| Term | Meaning |
|------|---------|
| AAS | Asset Administration Shell |
| UI | User Interface |
| Vue Component | A reusable, isolated piece of UI in the Vue.js framework |

---

## 2. Module: AAS List Sorting

### 2.1 Overview

To navigate environments with dozens or hundreds of shells, users need a way to organize the visual list. The sorting module introduces a set of UI elements that allow the user to define a sorting field and direction. Whenever these values change, the application instantly reorganizes the rendered virtual scroll list. Instead of relying on a default or arbitrary list order, users can structure the data to find specific shells faster, thereby fulfilling the project's usability goals ([NFR01](../CRS.md#421-nfr01-user-friendliness-)).

The currently supported sorting attributes are:
* **Name** (Default)
* **ID**
* **ID Short**
* **Date Created**
* **Last Updated**

Users can also specify whether the data should be presented in an ascending or descending order.

### 2.2 Component Architecture

The feature uses two main Vue components:

1. **`SOURCE/aas-web-ui/src/components/AppNavigation/FilterAAS.vue` (Child Component):**
   Provides the UI menu containing the radio group for the `sortField` and a button toggle group for the `sortDirection`. It monitors these reactive properties and emits an `update:sort` event to the parent component whenever a user changes a selection.
2. **`SOURCE/aas-web-ui/src/components/AppNavigation/AASList.vue` (Parent Component):**
   Listens for the `update:sort` event and maintains the list of AAS entries. When new sort options are received, the component dynamically reorders the AAS list, ensuring the view immediately reflects the new sorting criteria.

### 2.3 Data Flow

The flow of a sort operation involves the following steps:

1. The user clicks the sort icon to reveal the dropdown menu.
2. The user modifies the `sortField` (e.g., selects "Date Created") or adjusts the `sortDirection` (Asc/Desc).
3. The Vue `watch` hook inside `FilterAAS.vue` detects this change immediately.
4. An `update:sort` event is emitted, carrying a payload object with the updated `{ sortField, sortDirection }`.
5. The parent component (`AASList.vue`) receives this event, triggering the state update handler.
6. A local sorting function (`sortAasList`) is called, executing standard JavaScript array sorting based on the requested properties, taking into account edge cases like undefined values.
7. The `<v-virtual-scroll>` component reacts to the array modification and re-renders the list in the correct order.

### 2.4 Sorting Behavior & Implementation Details

To ensure a smooth user experience, the sorting logic adheres to the following rules:

* **Alphanumeric Fields (Name, ID, ID Short):** These are compared using localized string comparisons. Cases are typically ignored to avoid arbitrary separations of capital and lowercase letters.
* **Timestamp Fields (createdAt, updatedAt):** These rely on parsing the ISO 8601 strings provided by the backend API extensions. 
* **Missing or Null Values:** Items that lack a requested property (e.g., older shells without a `createdAt` field) are safely caught and generally pushed to the bottom of the list to prevent runtime exceptions or unexpected shifting.
* **Directional Math:** The ascending/descending toggles utilize values of `1` and `-1` respectively. The final comparison result of two items is simply multiplied by this directional modifier to reverse the sort dynamically without writing duplicate sorting logic.

### 2.5 Known Limitations

* **Client-side Processing:** The sorting is applied entirely client-side. If the total number of AAS entities scales into the tens of thousands, recalculating the array could theoretically cause minor blocking on the main browser thread. However, the current standard operating environments and Vue's virtualized rendering prevent any significant performance degradation.
* **Attribute Depth:** Currently, sorting only applies to top-level structural identifiers and Administrative Information. It is not possible to dynamically sort the primary AAS list based on deeply nested submodel variables.
