# System Test Report (STR)

**Project:** BaSyx Viewer Plugin Extensions  
**Test Case ID:** <TC.PERF.002.L>  
**Test Case Name:** Sorting Performance Validation  
**Tester:** Mattis Weigold  
**Date:** 03.05.2026  
**Environment:** Firefox, Windows 10, Spring Backend  

---

## 1. Test Objective

Evaluate the performance of sorting operations under load (1000 AAS), ensuring compliance with NFR.002.

---

## 2. Preconditions

- System is deployed and running  
- Backend services are available  
- **1000 AAS files generated via `aas-datagen` (`npm run generate`) are uploaded to the server**  
- All AAS entries are fully loaded  
- UI state reset  

---

## 3. Test Execution Summary

| Scenario ID | Executed | Avg Time (ms) | Max Time (ms) | Result | Notes |
|:--|:--|:--|:--|:--|:--|
| SC-001 | Y | 22 | 30 | Pass | Name ASC |
| SC-002 | Y | 24 | 35 | Pass | Name DESC |
| SC-003 | Y | 20 | 28 | Pass | ID sorting |
| SC-004 | Y | 21 | 29 | Pass | idShort |
| SC-005 | Y | 35 | 48 | Pass | createdAt |
| SC-006 | Y | 37 | 50 | Pass | updatedAt |
| SC-007 | Y | 40 | 55 | Pass | Rapid toggling |

---

## 4. Detailed Results

### SC-001 – Sort by Name (ASC)
- **Expected:** <50 ms  
- **Actual:** ~22 ms  
- **Result:** Pass  

---

### SC-002 – Sort by Name (DESC)
- **Expected:** <50 ms  
- **Actual:** ~24 ms  
- **Result:** Pass  

---

### SC-003 – Sort by ID
- **Expected:** <50 ms  
- **Actual:** ~20 ms  
- **Result:** Pass  

---

### SC-004 – Sort by idShort
- **Expected:** <50 ms  
- **Actual:** ~21 ms  
- **Result:** Pass  

---

### SC-005 – Sort by createdAt
- **Expected:** <50 ms  
- **Actual:** ~35 ms  
- **Result:** Pass  
- **Comments:** Date parsing adds minor overhead  

---

### SC-006 – Sort by updatedAt
- **Expected:** <50 ms  
- **Actual:** ~37 ms  
- **Result:** Pass  

---

### SC-007 – Rapid Toggle Sorting
- **Expected:** No UI lag  
- **Actual:** Max ~55 ms, no visible frame drops  
- **Result:** Pass  
- **Comments:** Stable under repeated interactions  

---

## 5. Overall Result

**Final Result:** Pass  

**Summary:**  
Sorting performance meets defined thresholds.  
All operations remain within <50 ms baseline, with minimal variance under rapid interaction.

---