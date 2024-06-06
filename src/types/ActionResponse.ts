export type ActionResponse = {
  status: 'error' | 'success';
  body: Record<string, any>;
};
