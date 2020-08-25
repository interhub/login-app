class Databse {
    tables = {
        key: [],
        user: []
    }

    findIndex(table: string, param: Object):number{
        this.addTable(table)
        let key = Object.keys(param)[0]
        return this.tables[table].findIndex((obj: any) => obj[key] === param[key])
    }

    addTable(table: string = '') {
        if (!this.tables[table]) {
            this.tables[table] = []
        }
    }

    add(table: string, data: any):boolean {
        this.addTable(table)
        this.tables[table].push(data)
        return true
    }

    remove(table: string, param: Object):boolean {
        this.addTable(table)
        let index = this.findIndex(table, param)
        this.tables[table]?.splice(index, 1);
        return true
    }

    get(table: string, param: Object) {
        this.addTable(table)
        let key = Object.keys(param)[0];
        return this.tables[table].find((obj: any) => obj[key] === param[key]) || []
    }

    update(table: string, param: Object, newData: Object) {
        this.addTable(table)
        let key = Object.keys(param)[0];
        let newKey = Object.keys(newData)[0];
        let index = this.findIndex(table, param)
        // @ts-ignore
        return this.tables?.[table]?.[index]?.[newKey]=newData[newKey]
    }

    getAll() {
        return this.tables
    }
}

export default new Databse()

