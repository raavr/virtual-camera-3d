import init from './app/app';

function bootstrapProduction() {
    document.addEventListener("DOMContentLoaded", bootstrap);
}

export default function bootstrap() {
    init();
}

bootstrap();