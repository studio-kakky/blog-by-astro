interface ImportMetaEnv {
  readonly PUBLIC_CONTENTFUL_SPACE_ID: string;
  readonly PUBLIC_CONTENTFUL_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
