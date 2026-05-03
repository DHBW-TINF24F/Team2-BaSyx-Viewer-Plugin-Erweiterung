# Test Data Specification
**Test Case ID:** <TC.PERF.001.L>   
**Test Case Name:** Filtering Performance Validation

---

## 1. Description

This document defines the input datasets used to validate the filtering performance of the AAS Web UI as specified in [NFR.002](../SRS.md#52-nfr002--performance).

The datasets simulate large-scale AAS environments to ensure that filtering operations remain responsive under load.

---

## 2. Test Data Preparation

Before executing this test case, the following preparation must be completed:

* Install and configure the **AAS data generation package (`aas-datagen`)**
* Generate a baseline dataset by running:

```bash
npm run generate
```

* Upload the **1000 generated AAS files** to the backend server
* Ensure all AAS entries are fully indexed and visible in the AAS Web UI
* Confirm that the system is in a clean state before test execution (no cached filters or UI state retained)

---

## 3. Data Sets Overview

| Dataset ID   | Description                           | Size           | Usage                          |
| :----------- | :------------------------------------ | :------------- | :----------------------------- |
| TD-PERF-BASE | Generated AAS dataset via aas-datagen | 1000 AAS files | Used for all performance testing |

---

## 4. Test Scenarios

| Scenario ID | Search Input                    | Attribute Filters                  | Expected Behavior        |
| :---------- | :------------------------------ | :--------------------------------- | :----------------------- |
| SC-001    | empty                           | none                               | full list rendered       |
| SC-002    | partial match (e.g. "pump")     | none                               | filtered subset          |
| SC-003    | no match string                 | none                               | empty result list        |
| SC-004    | rapid input changes             | none                               | no UI lag                |
| SC-005    | special characters              | none                               | stable handling          |
| SC-006    | empty search + attribute filter | manufacturer/product filter active | combined filtering works |

---

## 5. Execution Notes

* Ensure all **1000 AAS entries are fully loaded** before starting tests
* Clear browser cache between runs
* Disable unnecessary browser extensions
* Each test must be repeated **at least 5 times**
* Record performance metrics using browser profiler tools

---

## 6. Expected Output Summary

* Filtering completes within **< 1s** under baseline conditions
* No UI freezing or dropped frames during interaction
* Stable performance under repeated input changes
* No crashes or rendering inconsistencies

---

## 7. General Acceptance Criteria

* All datasets execute without errors
* UI remains responsive under all test conditions
* Performance thresholds are consistently met across runs