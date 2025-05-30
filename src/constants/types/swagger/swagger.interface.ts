export interface SwaggerParameter {
  in: 'query' | 'path' | 'body' | 'header' | 'formData';
  name: string;
  description?: string;
  required?: boolean;
  type?: any;
  enum?: string[];
}

export interface SwaggerDocs {
  summary: string;
  description?: string;
  operationId?: string;
  parameters?: SwaggerParameter[];
  responses: Record<string, SwaggerResponse>;
}

export type SwaggerResponse = {
  description?: string;
  schema?: object;
  [key: string]: unknown;
};
