export class GitHubInfoInfo {
    id?: number;
    login?: string;
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    url?: string;

    constructor(item) {
        this.id = item?.id;
        this.login = item?.login;
        this.avatar_url = item?.avatar_url;
        this.events_url = item?.events_url;
        this.followers_url = item?.followers_url;
        this.following_url = item?.following_url;
        this.gists_url = item?.gists_url;
        this.gravatar_id = item?.gravatar_id;
        this.html_url = item?.html_url;
        this.organizations_url = item?.organizations_url;
        this.received_events_url = item?.received_events_url;
        this.repos_url = item?.repos_url;
        this.site_admin = item?.site_admin;
        this.starred_url = item?.starred_url;
        this.subscriptions_url = item?.subscriptions_url;
        this.type = item?.type;
        this.url = item?.url;
    }
}