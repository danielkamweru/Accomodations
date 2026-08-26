/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'swiper/css' {
  const content: string;
  export default content;
}
declare module 'swiper/css/effect-fade' {
  const content: string;
  export default content;
}
declare module 'swiper/css/navigation' {
  const content: string;
  export default content;
}
declare module 'swiper/css/pagination' {
  const content: string;
  export default content;
}
