/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/users": {
    /** @description Get all users */
    get: {
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": {
                /** Format: uuid */
                id: string;
                name: string;
              }[];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": {
              message?: string;
            };
          };
        };
      };
    };
    /** @description Create user */
    post: {
      requestBody: {
        content: {
          "application/json": {
            name: string;
          };
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": {
              /** Format: uuid */
              id: string;
              name: string;
            };
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": {
              message?: string;
            };
          };
        };
      };
    };
  };
  "/api/v1/users/{id}": {
    /** @description Get user by id */
    get: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": {
              /** Format: uuid */
              id: string;
              name: string;
            };
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": {
              message?: string;
            };
          };
        };
      };
    };
    /** @description Delete user */
    delete: {
      parameters: {
        path: {
          id: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": Record<string, never>;
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": {
              message?: string;
            };
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
