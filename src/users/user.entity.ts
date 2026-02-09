import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1234567890',
    nullable: true,
  })
  @Column({ nullable: true })
  phone: string;

  @ApiProperty({
    description: 'Whether the user is active',
    example: true,
  })
  @Column({ default: true })
  active: boolean;

  @ApiProperty({
    description: 'The creation date of the user',
    example: '2026-02-09T12:00:00.000Z',
  })
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
