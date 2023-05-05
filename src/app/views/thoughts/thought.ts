export interface Thought {
  id?: number
  description: string
  author: string
  case: string
  favorite: boolean
}

export interface ThoughtSearchResults<T> {
  items: Thought[];
  total_count: number;
  incomplete_results: boolean;
}