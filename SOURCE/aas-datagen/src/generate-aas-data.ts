import * as fs from 'fs';
import * as path from 'path';

const OUTPUT_DIR = path.join(__dirname, '../generated-aas');
const COUNT = 1000;

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

const manufacturers = ['Siemens', 'Bosch', 'Festo', 'ABB', 'Schneider'];
const productTypes = ['Motor', 'Sensor', 'Controller', 'Valve', 'Pump'];
const families = ['Alpha', 'Beta', 'Gamma', 'Delta'];
const classificationSystems = ['ECLASS', 'UNSPSC', 'IEC'];

function randomItem(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateAAS(index: number) {
    const manufacturer = randomItem(manufacturers);
    const productType = randomItem(productTypes);
    const family = randomItem(families);

    return {
        assetAdministrationShells: [
            {
                id: `aas-${index}`,
                idShort: `AAS_${index}`,
                assetInformation: {
                    assetKind: 'Instance',
                },
                submodels: [
                    {
                        idShort: 'Nameplate',
                        submodelElements: [
                            { idShort: 'ManufacturerName', value: manufacturer },
                            { idShort: 'ManufacturerProductDesignation', value: `${productType}-${index}` },
                            { idShort: 'ManufacturerProductFamily', value: family },
                            { idShort: 'ManufacturerProductType', value: productType },
                            { idShort: 'OrderCodeOfManufacturer', value: `ORD-${index}` },
                            { idShort: 'ProductArticleNumberOfManufacturer', value: `ART-${index}` },
                            { idShort: 'ProductClassificationSystem', value: randomItem(classificationSystems) },
                            { idShort: 'ProductClassId', value: `CLS-${index % 50}` },
                        ],
                    },
                ],
            },
        ],
    };
}

for (let i = 0; i < COUNT; i++) {
    const aas = generateAAS(i);
    const filePath = path.join(OUTPUT_DIR, `aas-${i}.json`);
    fs.writeFileSync(filePath, JSON.stringify(aas));
}

console.log(`Generated ${COUNT} AAS files in ${OUTPUT_DIR}`);