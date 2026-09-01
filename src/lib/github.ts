export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export async function fetchGithubProfile(username: string): Promise<GithubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=30&sort=updated`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const data: GithubRepo[] = await res.json();
    return data.filter(repo => repo.name !== 'repo' && repo.name !== 'temp' && repo.name !== 'check');
  } catch {
    return [];
  }
}
