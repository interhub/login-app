import {DataType} from "../types/types";

export const enum TABLES {
    key = 'key',
    user = 'user',
    token = 'token'
}

class Databse {
    private tables = {
        key: [],
        user: [],
        token: []
    }

    private findIndex(table: TABLES, param: Object): number {
        this.addTable(table)
        let key = Object.keys(param)[0]
        return this.tables[table].findIndex((obj: any) => obj[key] === param[key])
    }

    private addTable(table: TABLES | string) {
        if (!this.tables[table]) {
            this.tables[table] = []
        }
    }

    add<DataType>(table: TABLES | string, data: DataType): boolean {
        this.addTable(table)
        this.tables[table].push(data)
        return true
    }

    remove<T>(table: TABLES, param: DataType extends T ? T : null): boolean {
        this.addTable(table)
        let index = this.findIndex(table, param)
        this.tables[table]?.splice(index, 1);
        return true
    }

    get<T>(table: TABLES, param: DataType extends T ? T : null): DataType extends T ? DataType : null {
        this.addTable(table)
        let key = Object.keys(param)[0];
        return this.tables[table]?.find((obj: any) => obj[key] === param[key]) || null
    }

    update<T>(table: TABLES, param: Object, newData: DataType extends T ? T : null): boolean {
        this.addTable(table)
        let newKey = Object.keys(newData)[0];
        let index = this.findIndex(table, param)
        let isExist = !!this.tables?.[table]?.[index]?.[newKey]
        if (isExist) {
            // @ts-ignore
            this.tables?.[table]?.[index]?.[newKey] = newData[newKey]
            return true
        }
        return false
    }

    getAll() {
        return this.tables
    }
}

export default new Databse()

