## TINF24F_3-MOD-1v0 — Module Documentation (MOD)

**Project:** BaSyx Viewer Plugin Extension  
**Module:** AAS Filter (attribute-based filtering)  
**Team:** Team 2  
**Role owner:** László  
**Date:** 2026-05-03  
**Status:** Draft v0.1

---

## Table of Contents

- [Version Control](#version-control)
- [1. Introduction](#1-introduction)
	- [1.1 Purpose](#11-purpose)
	- [1.2 Scope](#12-scope)
	- [1.3 Definitions, Acronyms, Abbreviations](#13-definitions-acronyms-abbreviations)
- [2. Module: AAS Filter](#2-module-aas-filter)
	- [2.1 Overview](#21-overview)
	- [2.2 Data Flow](#22-data-flow)
	- [2.3 Key Files](#23-key-files)
	- [2.4 Key Functions](#24-key-functions)
	- [2.5 Backend Calls](#25-backend-calls)
	- [2.6 Filter Behavior](#26-filter-behavior)
	- [2.7 Extension](#27-extension)
	- [2.8 Limitations](#28-limitations)

---

## Version Control

| Version | Date       | Author  | Notes |
|---------|------------|---------|-------|
| 1.0     | 2026-05-03 | László  | Initial draft for attribute-based AAS filtering |

---

## 1. Introduction

### 1.1 Purpose

This Module Documentation describes the frontend filter function for AAS entries. The filter can search for manufacturer and product attributes such as `manufacturerName`, `ProductClassificationSystem`, and `ProductClassId`.

### 1.2 Scope

The implementation covers the frontend in `aas-web-ui`: UI fields, normalization, value extraction, hydration, and filter evaluation. Backend APIs are used as data sources when the registry response is not sufficient.

### 1.3 Definitions, Acronyms, Abbreviations

| Term | Meaning |
|------|---------|
| AAS | Asset Administration Shell |
| API | Application Programming Interface |
| UI | User Interface |

---

## 2. Module: AAS Filter

### 2.1 Overview

`FilterAAS.vue` provides the filter fields and `AASList.vue` processes the values, normalizes them, and filters the list. The module supports attribute-based search for AAS entries and keeps the loaded AAS data in `hydratedAasIds` to avoid repeated backend calls.

### 2.2 Data Flow

1. The user sets one or more attribute filters.
2. `hasActiveAttributeFilters` detects that filtering is active.
3. `hydrateAttributeFieldsForList` loads the full AAS and related submodels if the registry data is not enough.
4. The extracted values are merged and stored in the comparison fields.
5. `applyListFilters` filters the list using the normalized values.

### 2.3 Key Files

- `SOURCE/aas-web-ui/src/components/AppNavigation/FilterAAS.vue`
- `SOURCE/aas-web-ui/src/components/AppNavigation/AASList.vue`
- `SOURCE/aas-web-ui/src/types/AASFilters.ts`
- `SOURCE/aas-web-ui/src/composables/AAS/AASHandling.ts`

### 2.4 Key Functions

- `extractAttributeValue(item, aliases)`: recursive extraction of attribute values via alias names.
- `enrichAttributeFields(list)`: writes existing values into comparison fields like `<field>Lower`.
- `hasActiveAttributeFilters(filters)`: checks whether at least one attribute filter is set.
- `combineExtractedAttributeValue(sources, aliases)`: merges values from multiple sources.
- `applyExtractedAttributeFields(targetItem, sources)`: sets the comparison fields of an entry.
- `hydrateAttributeFieldsForList(list)`: loads missing AAS and submodel data and extracts values from it.
- `applyListFilters()`: performs the actual filtering.

### 2.5 Backend Calls

If the registry does not provide enough information, the frontend fetches additional data through backend calls. First the full AAS is loaded, then the related submodels are loaded. Only after that are the attribute values extracted and used for filtering.

### 2.6 Filter Behavior

- Values are normalized and compared in lowercase.
- Attribute filters only check their own field, so there is no global fallback.
- A global search term is still available for broad filtering across several fields.
- This avoids false matches when only one specific attribute is searched.

### 2.7 Extension

- Add a new field to `AASAttributeFilters`.
- Add the input field in `FilterAAS.vue`.
- Extend extraction and comparison logic in `AASList.vue`.
- Add new alias names if a data source uses different idShorts or names.

### 2.8 Limitations

- Hydration creates additional network requests.
- Not all possible idShort variants are covered automatically.
- Client-side filtering can be slower for very large lists.

