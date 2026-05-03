# System Test Report (STR)

**Project:** BaSyx Viewer Plugin Extensions
**Test Case ID:** <TC.PERF.001.L>
**Test Case Name:** Filtering Performance Validation
**Tester:** Mattis Weigold
**Date:** 03.05.2026
**Environment:** Chrome / Firefox, Windows 10, Spring Backend

---

## 1. Test Objective

Measure and validate the **performance of filtering operations** in the AAS Web UI under realistic load conditions using 1000 AAS files.

The focus is on **response time, UI responsiveness, and stability**, not only functional correctness.

---

## 2. Preconditions

* System is deployed and running
* Backend services are available
* Dataset TD-PERF-BASE (1000 AAS files) is uploaded and indexed
* Browser cache cleared before execution
* Chrome DevTools / Firefox Profiler available

---

## 3. Test Execution Summary

| Scenario ID | Executed (Y/N) | Result (Pass/Fail) | Avg Time (ms) | Max Time (ms) | Notes                                    |
| :---------- | :------------- | :----------------- | :------------ | :------------ | :--------------------------------------- |
| SC-001      | Y              | Pass               | 420           | 480           | Full list render                         |
| SC-002      | Y              | Pass               | 440           | 500           | Partial filtering                        |
| SC-003      | Y              | Pass               | 410           | 470           | Empty result                             |
| SC-004      | Y              | Pass               | 480           | 550           | Rapid typing                             |
| SC-005      | Y              | Pass               | 430           | 490           | Special characters                       |
| SC-006      | Y              | Pass               | 500           | 620           | Attribute filtering (hydration overhead) |

---

## 4. Detailed Results

### SC-001 – Empty Search (Full List)

* **Expected:** < 1 s
* **Actual:** ~420 ms
* **Result:** Pass
* **Comments:**

---

### SC-002 – Partial Match ("pump")

* **Expected:** < 1 s
* **Actual:** ~440 ms
* **Result:** Pass
* **Comments:**

---

### SC-003 – No Match

* **Expected:** < 1 s
* **Actual:** ~410 ms
* **Result:** Pass
* **Comments:**

---

### SC-004 – Rapid Input Changes

* **Expected:** No UI lag
* **Actual:** Empty Search List, but not lag
* **Result:** Pass
* **Comments:**

---

### SC-005 – Special Characters

* **Expected:** Stable handling
* **Actual:** ~430 ms
* **Result:** Pass
* **Comments:**

---

### SC-006 – Attribute Filtering

* **Expected:** Efficient combined filtering
* **Actual:** ~500 ms average, ~620 ms peak
* **Result:** Pass
* **Comments:**

---

## 5. Overall Result

**Final Result:** Pass

**Summary:**
Average execution time is approximately **450 ms**.

---
