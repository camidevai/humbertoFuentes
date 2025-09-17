export interface InstagramData {
  followers: number;
  growth_30d_percent: number;
  net_followers_30d: number;
  started_following_30d: number;
  unfollowed_30d: number;
  views_30d: number;
  reach_30d: number;
  interactions_30d: number;
  interactions_split_30d: { followers_percent: number; non_followers_percent: number };
  views_by_format_30d: { reels_percent: number; stories_percent: number; posts_percent: number; live_percent: number };
  interactions_by_format_30d: { reels_percent: number; live_percent: number; posts_percent: number; stories_percent: number };
  top_reels_30d_views: number[];
}

export interface TikTokData {
  audience_gender_percent: { male: number; female: number };
  peak_activity: { window: string; basis: string };
  summary_28d: { post_views: number; profile_views: number; likes: number; comments: number; shares: number; rewards_usd: number; traffic_for_you_percent: number };
  summary_60d: { post_views: number; profile_views: number; likes: number; comments: number; shares: number; rewards_usd: number; traffic_for_you_percent: number };
  summary_365d: { post_views: number; profile_views: number; likes: number; comments: number; shares: number; traffic_for_you_percent: number };
  watchers_60d: { total: number; new: number; gender_percent: { male: number; female: number } };
  watchers_365d: { total: number; new: number; gender_percent: { male: number; female: number } };
  top_posts_60d_views: number[];
  top_posts_365d_views: number[];
}

export interface CaseStudy {
  title: string;
  views: number;
  link: string | null;
  thumb: string;
  platform: string;
}

export interface Testimonial {
  name: string | null;
  company: string | null;
  rating: number;
  quote: string | null;
}

export interface Contact {
  email: string | null;
  whatsapp: string | null;
  sla_hours: number;
}

export interface ContentData {
  CREATOR_NAME: string;
  HANDLE: string;
  LOCATION: string;
  PLATFORMS: {
    instagram: InstagramData;
    tiktok: TikTokData;
  };
  CONTACT: Contact;
  PACKAGES: {
    starter: any;
    performance: any;
    full: any;
  };
  ADDONS: string[];
  CASE_STUDIES: CaseStudy[];
  TESTIMONIALS: Testimonial[];
}
