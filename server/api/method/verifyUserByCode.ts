import database, {TABLES} from "../../db/database";
import {ResReportType} from "../../types/types";

export default function (code: string): ResReportType {
    let result = !!database.get<{ code: string }>(TABLES.key, {code})
    return {result, message: ''}
}