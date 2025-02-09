import { QueryApiProps } from "@/lib/interface";
import { postReq } from "./api";

export const sendQuery = async (payload: QueryApiProps) => {
    return await postReq('/api/queries', payload)
}