import { App } from './app/app';

function bootstrapProduction() {
  document.addEventListener("DOMContentLoaded", bootstrap);
}

export default function bootstrap() {
  (new App()).init();
}

bootstrap();