export interface User {
    id?: number,
    login?: string,
    avatar_url?: string,
    events_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    gravatar_id?: string,
    html_url?: string,
    organizations_url?: string,
    received_events_url?: string,
    repos_url?: string,
    site_admin?: boolean,
    starred_url?: string,
    subscriptions_url?: string,
    type?: string,
    url?: string
}

export interface GitHubResults {
  items: User[];
  total_count: number;
  incomplete_results: boolean;
}