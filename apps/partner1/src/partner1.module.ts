import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    EventsModule,
    SpotsModule,
    ConfigModule.forRoot({ envFilePath: '.env.partner1', isGlobal: true }),
  ],
})
export class Partner1Module {}
