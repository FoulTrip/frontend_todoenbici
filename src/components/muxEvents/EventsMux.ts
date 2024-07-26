import { LiveStreamEvents } from "@/types/mux";
// import ClientMux from "./clientMux";

export const newEvents = ({ type, data }: LiveStreamEvents) => {
  try {
    console.log(type);
    console.log(data);
    const StreamEvent = { type, data };
    // ClientMux(StreamEvent);
    return type;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return error.message;
    }
  }
};
