import { FacadeService } from './the-facade-service';

export * from './kitchen-service/kitchen-service';
export * from './the-facade-service';


// implementation
new FacadeService().facadeRunning();