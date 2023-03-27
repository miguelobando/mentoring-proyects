import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

const config = new ConfigService();

export const Dbmysql = TypeOrmModule.forRoot({
  type: 'mysql',
  host: config.DATA_BASE_HOST,
  port: parseInt(config.DATA_BASE_PORT, 10),
  username: config.DATA_BASE_USER,
  database: config.DATA_BASE_NAME,
  synchronize: false,
  autoLoadEntities: true,
  entities: ['persistence/**/*.{.ts,.js}'],
});
