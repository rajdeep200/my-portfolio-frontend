import axios from "axios";
import { QueryApiProps } from "@/lib/interface";

type PostReqType = QueryApiProps;

export const postReq = async (endpoint: string, payload: PostReqType) => {
  try {
    const { data } = await axios.post(endpoint, payload);
    return data;
  } catch (error) {
    return {
      ack: 0,
      error,
    };
  }
};
