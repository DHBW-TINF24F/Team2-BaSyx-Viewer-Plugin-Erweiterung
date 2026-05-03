# Test Data Specification
**Test Case ID:** <TC.PERF.002.L>   
**Test Case Name:** Sorting Performance Validation

---

## 1. Description

This document defines the input datasets used to validate sorting performance in the AAS Web UI as specified in [NFR.002](../SRS.md#52-nfr002--performance).

The datasets ensure that sorting operations remain efficient and stable even under large data loads.

---

## 2. Test Data Preparation

Before executing this test case, the following preparation must be completed:

* Install and configure the **AAS data generation package (`aas-datagen`)**
* Generate test data by running:

```bash
npm run generate
```

* Upload **1000 generated AAS files to the backend server**
* Ensure all entries are visible and fully loaded in the UI
* Confirm that no sorting is pre-applied before test execution
* Reset UI state to default view

---

## 3. Data Sets Overview

| Dataset ID   | Description                           | Size           | Usage                          |
| :----------- | :------------------------------------ | :------------- | :----------------------------- |
| TD-PERF-BASE | Generated AAS dataset via aas-datagen | 1000 AAS files | Used for all performance testing |

---

## 4. Test Scenarios

| Scenario ID | Sort Field           | Direction | Expected Behavior          |
| :---------- | :------------------- | :-------- | :------------------------- |
| SC-001    | name                 | ASC       | baseline alphabetical sort |
| SC-002    | name                 | DESC      | reversed alphabetical sort |
| SC-003    | id                   | ASC       | string-based sorting       |
| SC-004    | idShort              | ASC       | short-name sorting         |
| SC-005    | createdAt            | ASC       | date sorting               |
| SC-006    | updatedAt            | DESC      | reverse date sorting       |
| SC-007    | rapid toggle sorting | mixed     | no UI lag or reflow issues |

---

## 5. Execution Notes

* Ensure **1000 AAS files are uploaded and indexed** before execution
* Clear browser cache before each run
* Disable UI auto-refresh during measurement
* Perform each test **at least 5 times** for statistical consistency
* Use browser performance profiling tools for measurement

---

## 6. Expected Output Summary

* Sorting completes within **< 50 ms (baseline case)**
* No visible UI lag during re-rendering
* No excessive DOM updates or reflows
* Stable performance under repeated sorting actions

---

## 7. General Acceptance Criteria

* All datasets execute successfully without errors
* Sorting results are correct and stable
* Performance thresholds are consistently met
* No UI crashes or freezing under load
