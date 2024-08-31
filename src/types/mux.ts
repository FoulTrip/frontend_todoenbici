export interface LiveStreamEvents {
  type:
    | "video.asset.live_stream_completed"
    | "video.live_stream.idle"
    | "video.live_stream.disconnected"
    | "video.live_stream.active"
    | "video.live_stream.ready"
    | "video.live_stream.connected"
    | "video.live_stream.recording";
  data: {
    tracks: Array<{
      type: "audio" | "video";
      primary?: boolean;
      max_channels?: number;
      max_channel_layout?: "mono" | "stereo";
      id: string;
      max_width?: number;
      max_height?: number;
      max_frame_rate?: number;
    }>;
    status: "ready" | "not_ready"; // Ajusta los valores según las posibles opciones
    resolution_tier: "1080p" | "720p" | "HD" | "SD"; // Ajusta los valores según las posibles opciones
    recording_times: Array<{
      type: "content" | "slate";
      started_at: {
        seconds: number;
        nanos: number;
      };
      duration: number;
    }>;
    playback_ids: Array<{
      policy: "public" | "private"; // Ajusta los valores según las posibles opciones
      id: string;
    }>;
    mp4_support: "none" | "basic" | "full"; // Ajusta los valores según las posibles opciones
    max_stored_resolution: "HD" | "1080p" | "4K"; // Ajusta los valores según las posibles opciones
    max_stored_frame_rate: number;
    max_resolution_tier: "1080p" | "720p" | "SD"; // Ajusta los valores según las posibles opciones
    master_access: "none" | "restricted"; // Ajusta los valores según las posibles opciones
    live_stream_id: string;
    ingest_type: "live_rtmp" | "live_hls"; // Ajusta los valores según las posibles opciones
    id: string;
    encoding_tier: "smart" | "standard"; // Ajusta los valores según las posibles opciones
    duration: number;
    created_at: number;
    aspect_ratio: "16:9" | "4:3" | "21:9"; // Ajusta los valores según las posibles opciones
  };
}
