export interface IUser {
    username: string;
    password: string;
    name: string;
}

export interface IRegisterResponse{
    status: string;
    userId: string;
}

export interface ILoginUser{
    username: string;
    password: string;
}

export interface ILoginResponse{
    status: string;
    username: string;
    name: string;
}

export interface IGetTopScorers{
    name: string;
    points: number;
}

export interface ICommitRequest{
    DateTime: string;
    username: string;
    commitcomment: string;
}

export interface IcommitResponse{
    status: string;
    username: string
}

export interface IGetGitCommitDetails{
    name: string;
    count: number;
}



//user commit details

export interface IAllGitCommitForUser {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: AuthorOrCommitter;
    committer: AuthorOrCommitter;
    parents?: (ParentsEntity)[] | null;
  }

  export interface Commit {
    author: AuthorOrCommitter1;
    committer: AuthorOrCommitter1;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
  }

  export interface AuthorOrCommitter1 {
    name: string;
    email: string;
    date: string;
  }

  export interface Tree {
    sha: string;
    url: string;
  }

  export interface Verification {
    verified: boolean;
    reason: string;
    signature: string;
    payload: string;
  }

  export interface AuthorOrCommitter {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }

  export interface ParentsEntity {
    sha: string;
    url: string;
    html_url: string;
  }
  