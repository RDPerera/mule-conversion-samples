import * as dmUtils from "./dm-utils";

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    employees: {
        employee: {
            name: string;
            lastName: string;
            addresses: {
                address: {
                    street: string;
                    zipCode: string;
                }[];
            };
        }[];
    };
}

/*
 * title : "employees",
 * outputType : "XML",
 */
interface Employees {
    employee: {
        name: string;
        lastName: string;
        addresses: {
            address: {
                street: string;
                zipCode: number;
            }[];
        };
    }[];
}

/**
 * functionName : map_S_root_S_employees
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): Employees {
    return {
        employee: input.employees.employee
            .map((employeeItem) => {
                return {
                    name: employeeItem.name,
                    lastName: employeeItem.lastName,
                    addresses: {
                        address: employeeItem.addresses.address
                            .map((addressItem) => {
                                return {
                                    street: addressItem.street,
                                    zipCode: dmUtils.toNumber(addressItem.zipCode)
                                }
                            })
                    }
                }
            })
    }
}
