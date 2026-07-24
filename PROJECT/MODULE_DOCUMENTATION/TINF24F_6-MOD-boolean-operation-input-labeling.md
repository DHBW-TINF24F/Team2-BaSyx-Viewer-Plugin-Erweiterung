# TINF24F_2-MOD-1v0 — Module Documentation (MOD)

**Project:** BaSyx Viewer Plugin Extension  
**Module:** Boolean Operation Input Labeling  
**Team:** Team 2  
**Role owner:** Matti Frey (Technical Documentation)  
**Date:** 2026-05-03  
**Status:** Draft v1.0  

---

## Table of Contents

- [Version Control](#version-control)
- [1. Introduction](#1-introduction)
  - [1.1 Purpose](#11-purpose)
  - [1.2 Scope](#12-scope)
- [2. Module: Boolean Operation Input Labeling](#2-module-boolean-operation-input-labeling)
  - [2.1 Overview](#21-overview)

---

## Version Control

| Version | Date       | Author | Notes |
|--------|------------|--------|------|
| 1.0 | 2026-05-03 | Matti Frey | Initial Draft |

---

## 1. Introduction

### 1.1 Purpose

This Module Documentation (MOD) describes the **Boolean Operation Input Labeling** feature implemented in the BaSyx Viewer Plugin Extension.

The module implements **FR.006 – Improved labeling** and supports **UC05 – Label Input Variables** as defined in the SRS and CRS.

Its goal is to improve usability by ensuring that Boolean input variables within **Operations** are clearly labeled and easier to understand.

---

### 1.2 Scope

This module focuses on frontend improvements for **Operation input variables**, including:

- Adding labels to Boolean input variables (`xs:boolean`)
- Ensuring consistent rendering across datatypes
- Handling Boolean values correctly (e.g. string → Boolean)

Out of scope:
- Backend logic of Operations  
- API changes  

---

## 2. Module: Boolean Operation Input Labeling

### 2.1 Overview

Previously, Boolean input variables (`xs:boolean`) in Operations were displayed only as a toggle (`true/false`) without a label. This made it unclear which variable was being edited.

This module fixes the issue by introducing a consistent display:

- Boolean variables now always show a **label**
  - `displayName` if available  
  - otherwise `idShort`
- The UI structure is aligned with other datatypes (e.g. `xs:double`)
- Boolean values remain displayed as a **toggle**, but are now clearly identifiable

Additionally, the behavior distinguishes between:
- **Operation variables** (local value handling)
- **Regular properties** (direct API persistence)

This ensures that Boolean input variables are now **consistent, readable, and aligned with the requirements**.
