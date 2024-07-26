type MuxWebhookEvent = {
  type: string;
  id: string;
  created_at: string;
  object: {
    type: string;
    id: string;
    environment: {
      name: string;
      id: string;
    };
  };
  data: {
    id: string;
    created_at: number;
    status: "preparing" | "ready" | "errored";
    duration: number;
    resolution_tier: "audio-only" | "720p" | "1080p" | "1440p" | "2160p";
    max_resolution_tier: "1080p" | "1440p" | "2160p";
    encoding_tier: "smart" | "baseline";
    max_stored_frame_rate: number;
    aspect_ratio: string;
    playback_ids: Array<{
      id: string;
      policy: "public" | "signed";
    }>;
    tracks: Array<{
      id: string;
      type: "video" | "audio" | "text";
      duration?: number;
      max_width?: number;
      max_height?: number;
      max_frame_rate?: number;
      max_channels?: number;
      text_type?: "subtitles";
      text_source?:
        | "uploaded"
        | "embedded"
        | "generated_live"
        | "generated_live_final"
        | "generated_vod";
      language_code?: string;
      name?: string;
      closed_captions?: boolean;
      passthrough?: string;
      status?: "preparing" | "ready" | "errored" | "deleted";
      primary?: boolean;
      error?: {
        type: string;
        messages: string[];
      };
    }>;
    errors?: {
      type: string;
      messages: string[];
    };
    upload_id?: string;
    is_live?: boolean;
    passthrough?: string;
    live_stream_id?: string;
    master?: {
      status: "ready" | "preparing" | "errored";
      url?: string;
    };
    master_access?: "temporary" | "none";
    mp4_support?: "standard" | "none";
    source_asset_id?: string;
    normalize_audio?: boolean;
    static_renditions?: {
      status: "ready" | "preparing" | "disabled" | "errored";
      files: Array<{
        name: "low.mp4" | "medium.mp4" | "high.mp4" | "audio.m4a";
        ext: "mp4" | "m4a";
        height?: number;
        width?: number;
        bitrate?: number;
        filesize?: number;
      }>;
    };
    recording_times?: Array<{
      started_at: {
        nanos: number;
        seconds: number;
      };
      duration: number;
      type: "content" | "slate";
    }>;
    non_standard_input_reasons?: {
      video_codec?: string;
      audio_codec?: string;
      video_gop_size?: "high";
      video_frame_rate?: string;
      video_resolution?: string;
      video_bitrate?: string;
      pixel_aspect_ratio?: string;
      video_edit_list?: "non-standard";
      audio_edit_list?: "non-standard";
      unexpected_media_file_parameters?: "non-standard";
      unsupported_pixel_format?: string;
      unexpected_video_parameters?: string;
    };
    test?: boolean;
    ingest_type:
      | "on_demand_url"
      | "on_demand_direct_upload"
      | "on_demand_clip"
      | "live_rtmp"
      | "live_srt";
    attempts?: Array<{
      webhook_id: number;
      response_status_code: number;
      response_headers: Record<string, string>;
      response_body: string | null;
      max_attempts: number;
      id: string;
      created_at: string;
      address: string;
    }>;
  };
};
