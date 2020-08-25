export type DbType = typeof DB
const DB = {
    tables: {
        key: [],
        user: []
    },
    set: (table: string, data: any) => {
        this.tables[table].push(data)
        return true
    },
    remove: (table: string, param: Object) => {
        let key = Object.keys(param)[0]
        let index = this.tables[table].findIndex((obj: any) => obj[key] === param[key]) || []
        this.tables[table].splice(index, 1);
        return true
    },
    get: (table: string, param: Object) => {
        let key = Object.keys(param)[0];
        return this.tables[table].find((obj: any) => obj[key] === param[key]) || []
    },
    getAll: () => this.tables
}
export default DB

