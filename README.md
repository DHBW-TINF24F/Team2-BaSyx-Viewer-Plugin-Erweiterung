# 🚀 Team 2 – BaSyx Viewer Plugin Extension

<img width="769" height="371" alt="Screenshot 2026-04-16 123247" src="https://github.com/user-attachments/assets/72c542e4-24a0-4ea8-9e63-43f2f23e2c74" />

---

# 👥 Project Team – Team 2 Software Engineering

| Name | Role | Github |
| ---- | ---- | ---- |
| Manuel Sposato​ | Project Leader​ | [Manujpg](https://github.com/Manujpg) |
| Amon Rizzo​ | Product Manager | [amon1220](https://github.com/amon1220)​ |
| Jakob Pauls​ | System Developer | [DJSkyRoad](https://github.com/DJSkyRoad) |
| David Ehrhardt​ | System Developer | [xyzyx4546](https://github.com/xyzyx4546)​ |
| Mattis Weigold​ | Testmanager | [Skullman-G](https://github.com/Skullman-G) |
| Laszlo Engemann​ | Technical Documentation | [Laszlo2025](https://github.com/Laszlo2025)​ |
| Matti Frey​ | Technical Documentation | [Matti2603](https://github.com/Matti2603) |

---

# 🌱 The Root Project

Our project is an extension and fork of the [basyx-aas-web-ui](https://github.com/eclipse-basyx/basyx-aas-web-ui), a web application built with Vue.js. It enables the management of so-called Asset Administration Shells.

More information about AAS files and additional details about BaSyx can be found in the official [BaSyx documentation](https://wiki.basyx.org/en/latest/index.html).

![alt text](ORIGINAL_DOCS/Figs/AAS_Web_UI.png "AAS GUI")

---

# 🧩 Our Project – BaSyx Viewer Extension

Our [project specification](https://github.com/DHBW-TINF24F/.github/blob/main/project2_basyx_viewer_extension.md) consists of maintaining and further developing the existing frontend and API functionalities of the BaSyx AAS Web UI.

The goal of this project was to improve the usability of the BaSyx Viewer and make working with Asset Administration Shells (AAS) easier, faster, and more intuitive.

We implemented several enhancements for the frontend and API, including improved search and sorting functionality, better metadata support, Digital Nameplate integration, and clearer UI labeling.

---

# 🧠 Project Overview

The BaSyx Viewer is a web-based application for visualizing and interacting with **Asset Administration Shells (AAS)**.

An **Asset Administration Shell** is a standardized digital representation of a physical asset, such as a machine, component, product, or device. It contains structured information like manufacturer data, technical properties, identifiers, product information, operational data, and metadata.

AAS is an important concept in **Industry 4.0**, where physical assets are represented as digital twins and can be managed digitally.

---

# 🎯 Project Goal

The original BaSyx Web UI already allowed users to view AAS data, but several limitations made it harder to work efficiently with complex AAS structures.

This project improves:

- search functionality
- sorting of loaded AAS shells
- Digital Nameplate integration
- API metadata support
- UI clarity
- overall usability

All planned features from the CRS and SRS have been implemented.

---

# 🌐 Live Demo

The implemented system can be accessed here:

https://basyx.fam-ehrhardt.de

This demo shows the implemented features in a production-like environment.

---

# 🔄 Before vs. After

## Before

- Limited search functionality
- No structured sorting by relevant properties
- Missing API metadata such as `createdAt` and `updatedAt`
- Digital Nameplate generator not fully integrated
- Boolean values were harder to understand in the UI

## After

- Recursive search through AAS content
- Attribute-based sorting
- Extended API metadata support
- Integrated Digital Nameplate generation
- Clearer UI labeling for boolean values

---

# 🚀 Implemented Features

The following features were implemented as part of this project.

---

## ↕️ [FR02 / FR.002 – Attribute-Based Sorting](PROJECT/CRS.md#fr02)

The sorting functionality helps users organize loaded AAS shells by relevant properties.

### Implementation

Loaded AAS shells can be sorted by:

- Manufacturer Name
- Product Designation
- Product Family
- Product Type
- Order Code
- Product Article Number
- Product Classification
- Product Class ID
  
### Benefit

Users can navigate large datasets faster and find relevant assets more easily.

### Screenshot

<img width="499" height="804" alt="image" src="https://github.com/user-attachments/assets/c9b21381-7b37-42d5-8df8-d9b384db3287" />


---


## 🔍 [FR03 / FR.003 – Advanced Recursive Search](PROJECT/CRS.md#fr03)

The search functionality was extended to search recursively through AAS structures.

### Implementation

The search now supports:

- recursive traversal of AAS structures
- searching nested elements and attributes
- improved matching of search terms
- adjustable search depth for performance control

### Benefit

Users can find relevant data even if it is deeply nested inside an AAS.

### Screenshot

<img width="708" height="804" alt="image" src="https://github.com/user-attachments/assets/f76c26a8-86f6-4017-b12e-5a4141f3bc94" />

---

## 🏷️ [FR04 / FR.004 – Digital Nameplate Integration](PROJECT/CRS.md#fr04)

The Digital Nameplate generator was integrated into the Digital Nameplate plugin.

### Implementation

The feature provides:

- direct access within the plugin UI
- automatic generation based on AAS data
- structured display of product and manufacturer information

### Benefit

Users can generate and view Digital Nameplates directly inside the BaSyx Viewer.

### Screenshot

Backend: <img width="449" height="609" alt="image" src="https://github.com/user-attachments/assets/959c82c1-5d8a-455c-aea4-f461e8d8629d" />

Frontend: <img width="434" height="703" alt="image" src="https://github.com/user-attachments/assets/bc12e35a-363a-44e6-a500-32a11d729d5b" />


---

## 🔗 [FR05 / FR.005 – API Enhancements & Metadata-Based Filtering](PROJECT/CRS.md#fr05)

The API was extended to provide additional administrative metadata and make this information usable in the frontend.

### Implementation

The API now includes:

- `createdAt`
- `updatedAt`

These metadata fields are used in the frontend to support sorting and filtering of loaded AAS shells.
The development of this feature was also done in https://github.com/amon1220/basixBackup for safety because it wasn't clear at the time how the 2 extra repos interact with the viewer.

In addition, users can filter shells by relevant asset and product information, such as:

- Manufacturer Name
- Product Designation
- Product Family
- Product Type
- Order Code
- Product Article Number
- Product Classification
- Product Class ID

### Benefit

Users can identify and organize AAS shells more efficiently based on technical, administrative, and product-related metadata.

This improves both API data access and frontend usability.

### Screenshot

<img width="528" height="1210" alt="WhatsApp Image 2026-05-03 at 08 19 21" src="https://github.com/user-attachments/assets/3ceddc01-9a7b-4486-8e89-bf59c5067376" />

---

## 🎨 [FR06 / FR.006 – Improved UI Labeling](PROJECT/CRS.md#fr06)

Boolean values in operation submodules are now displayed more clearly.

### Implementation

The UI now provides:

- visual switches for boolean input variables
- clear `true` and `false` labels
- visible `xs:boolean` type information
- improved readability in operation submodules

### Benefit

Users can understand boolean operation inputs faster and interact with them more intuitively.

### Screenshot

<img width="1456" height="804" alt="image" src="https://github.com/user-attachments/assets/95dc604f-32aa-4fe4-9fd9-d7e11250a381" />

---

# 🧪 Use Case Coverage

The implemented features support the main project use cases:

- **UC01 – Find and view AAS data:** supported by recursive search, sorting, and UI improvements
- **UC02 – Access AAS data via API:** supported by `createdAt` and `updatedAt` metadata
- **UC03 – Generate Digital Nameplate:** supported by the integrated Nameplate generator

---

# 📊 Non-Functional Requirements

The project also addresses the non-functional requirements:

- **Usability:** clearer UI, better search, easier navigation
- **Performance:** adjustable search depth and efficient data handling
- **Stability:** integrated into the existing BaSyx Viewer structure
- **Maintainability:** modular extension of the existing system
- **License:** original open-source license remains unchanged

---

# 🧱 System Architecture

The system extends the existing BaSyx Viewer architecture:

- **Frontend:** Vue.js-based BaSyx Web UI
- **Backend:** Java / Spring Boot API
- **Architecture:** modular plugin-based extension
- **Communication:** REST API using JSON
- **Data Model:** Asset Administration Shell according to AAS specifications

---

# ✅ Project Outcome

All defined project requirements have been implemented.

The final system provides:

- recursive search
- attribute-based sorting
- integrated Digital Nameplate generation
- extended API metadata
- improved UI labeling
- better overall usability

The project improves the BaSyx Web UI by making AAS data easier to find, understand, and use.
