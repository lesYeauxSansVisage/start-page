export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}
