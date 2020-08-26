import database, {TABLES} from "../../db/database";
import {CodeType, ResReportType} from "../../types/types";

export default function (code: string): ResReportType  {
    let result = !!database.get<{ code: string }>(TABLES.key, {code})
    if(result){
        database.remove<{code:string}>(TABLES.key, {code})
    }
    return {result, message: '',}
}